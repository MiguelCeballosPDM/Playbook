import { PromptResult, AnalysisStatus } from "../types";

export const generateOptimizedPrompt = async (userInput: string): Promise<PromptResult> => {
  try {
    // Llamamos a NUESTRA propia API (la que creamos en api/optimize.ts)
    // Esto oculta la API Key y la lógica compleja al navegador.
    const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
    });

    if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();

    // Mapeamos el resultado de la API a nuestro tipo interno
    const status = data.status === 'SUCCESS' ? AnalysisStatus.SUCCESS : AnalysisStatus.WARNING;

    return {
      status: status,
      explanation: data.explanation,
      generatedPrompt: data.generatedPrompt,
      relevantSection: data.relevantSection,
    };

  } catch (error) {
    console.error("API Error:", error);
    return {
      status: AnalysisStatus.ERROR,
      explanation: "Connection error. Please check your internet or try again later.",
    };
  }
};