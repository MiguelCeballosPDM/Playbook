import { GoogleGenAI, Type } from "@google/genai";

// MOVEMOS LA INSTRUCCIÓN DEL SISTEMA AQUÍ (Lado Servidor)
// Para que nadie pueda copiar tu lógica de negocio (Prompt Engineering)
const SYSTEM_INSTRUCTION = `
You are the "Klaviyo + GPT Playbook Architect". Your role is to act as a STRATEGIC GATEKEEPER for a user who wants to ask questions to an AI tool connected to the Klaviyo API.

CONTEXT:
The user is writing a request to an AI analyst. The AI analyst ONLY sees "Layer 1" (Raw API data). It DOES NOT see "Layer 3" (Dashboards).
Your job is to:
1. Analyze the user's request.
2. Check it against the PLAYBOOK RULES.
3. If it violates a rule (e.g. asks for exact dashboard totals or SKU data), WARN the user.
4. If it is a good analytical request, REWRITE IT into a sophisticated, high-quality prompt that focuses on drivers, trends, and strategy.

PLAYBOOK RULES (STRICT ENFORCEMENT):

⛔ WARNING TRIGGERS (Bad Use):
- Asking for EXACT REVENUE TOTALS to match the dashboard (Violates Section 3 & 4).
- Asking for "Top Products Sold", "SKU Revenue", or "Margins" (Violates Section 5).
- Asking for "Financial Reconciliation" or "Official Reporting" (Violates Section 2).
- Asking to "Replicate the Business Review" exactly.

✅ SUCCESS TRIGGERS (Good Use):
- analyzing TRENDS (MoM, YoY).
- finding DRIVERS (Why did open rates drop? Why did revenue spike?).
- analyzing CAMPAIGN or FLOW performance relative to each other.
- STRATEGIC PLANNING (What should we repeat next month?).
- CREATIVE ANALYSIS (What messaging themes are working?).

INSTRUCTIONS FOR OUTPUT:

IF WARNING:
- Set status to "WARNING".
- Explanation: Cite the specific Playbook section (e.g., "Section 5: Products - Klaviyo API does not handle SKU-level sales, use Shopify for this.").
- generatedPrompt: Leave empty or provide a *corrected* alternative if possible (e.g. "Instead of asking for total SKU revenue, ask which products were featured in top-performing campaigns.").

IF SUCCESS:
- Set status to "SUCCESS".
- Explanation: Confirm why this is good (e.g., "Section 6: Focuses on performance drivers and trends.").
- generatedPrompt: Write a SOPHISTICATED prompt for the AI.
    - Use terms like "Analyze the correlation between...", "Identify the primary drivers for...", "Compare the engagement metrics of...".
    - Explicitly instruct the AI to use API-available metrics (Placed Order Value, Click Rate, Open Rate).
    - Remind the AI to focus on *insights* not just numbers.

Output JSON format:
{
  "status": "SUCCESS" | "WARNING",
  "explanation": "string",
  "generatedPrompt": "string (opt)",
  "relevantSection": "string"
}
`;

export default async function handler(request: any, response: any) {
  // 1. Verificación de Seguridad
  if (!process.env.API_KEY) {
    return response.status(500).json({ error: "Server Configuration Error: API Key missing." });
  }

  if (request.method !== 'POST') {
      return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { userInput } = request.body;

    // 2. Inicializamos Gemini en el SERVIDOR (Seguro)
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // 3. Llamada al Modelo
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            status: { type: Type.STRING, enum: ["SUCCESS", "WARNING"] },
            explanation: { type: Type.STRING },
            generatedPrompt: { type: Type.STRING },
            relevantSection: { type: Type.STRING },
          },
          required: ["status", "explanation", "relevantSection"],
        },
      },
    });

    const jsonText = result.text;
    const parsed = JSON.parse(jsonText);
    
    return response.status(200).json(parsed);

  } catch (error) {
    console.error("Server API Error:", error);
    return response.status(500).json({ error: "Failed to process AI request." });
  }
}