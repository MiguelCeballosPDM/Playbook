export const PLAYBOOK_CONTENT = `
Klaviyo + GPT: How We Use It (and How We Don’t)

1. Why this playbook exists
This playbook exists so we are aligned on how we use the GPT + Klaviyo app and what we should expect from it. We already know Klaviyo. What changes here is adding GPT on top of Klaviyo data. That combination can be extremely useful, but only if we are clear on what the app can realistically do and where its limits are. When expectations are off, we waste time trying to reconcile numbers that were never meant to match or asking questions the tool is simply not built to answer.
The purpose of this document is to define a shared way of thinking; How to reason with Klaviyo data using GPT. If we are aligned on this, the app becomes a strategic shortcut rather than a source of confusion.

2. What the GPT + Klaviyo app actually does
When we use the GPT + Klaviyo app, we are not interacting with the Klaviyo UI. We are not opening dashboards, clicking through Business Review, or looking at custom reports. What’s happening instead is simpler, but easy to misunderstand: GPT is working with the data Klaviyo makes available through its public API, and helping us analyze and reason through that data.
A simple way to think about it:
🚫 GPT does not see Klaviyo’s interface.
✅ GPT reads Klaviyo’s data and helps us think through it.

3. How Klaviyo data is structured: the layered model
Layer 1: The public API layer (ACCESSIBLE). Campaigns, flows, engagement metrics. Good for "Why did this happen?".
Layer 2: Klaviyo’s internal attribution and reporting model (NOT ACCESSIBLE). Internal logic, deduplication.
Layer 3: Dashboards and UI (NOT ACCESSIBLE). Visual outputs, the "source of truth".

4. The rule of thumb we follow
Dashboards give us the final numeric answer. The API helps us understand and optimize that answer.

5. How we think about products in the GPT + Klaviyo app
Klaviyo tells us which messages sold. Shopify tells us which products sold. Connecting the two requires external tooling.

6. A practical framework: what to ask and where to look
Ask about: Drivers, patterns, decisions.
Pull from dashboards: Total attributed revenue, exact splits, official rankings.
Outside this app: Top products sold overall, SKU revenue, Margin analysis.

7. How we actually use the GPT + Klaviyo app day to day
Weekly performance reviews, Monthly planning, QBR prep, Strategic brainstorms.

8. The mental model that matters most
The GPT + Klaviyo app does not replace BI. It reduces friction in how we think.
`;
// SYSTEM_INSTRUCTION has been moved to api/optimize.ts for security.
