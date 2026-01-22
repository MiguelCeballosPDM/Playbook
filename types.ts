export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

export interface PromptResult {
  status: AnalysisStatus;
  explanation: string;
  generatedPrompt?: string;
  relevantSection?: string;
}

export enum Tab {
  PLAYBOOK = 'PLAYBOOK',
  PROMPT_ARCHITECT = 'PROMPT_ARCHITECT'
}