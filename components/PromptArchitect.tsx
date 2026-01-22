import React, { useState } from 'react';
import { Sparkles, ArrowRight, AlertTriangle, CheckCircle2, Loader2, Copy } from 'lucide-react';
import { generateOptimizedPrompt } from '../services/geminiService';
import { AnalysisStatus, PromptResult } from '../types';

const PromptArchitect: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<PromptResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    
    const response = await generateOptimizedPrompt(input);
    setResult(response);
    setLoading(false);
  };

  const copyToClipboard = () => {
    if (result?.generatedPrompt) {
      navigator.clipboard.writeText(result.generatedPrompt);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Prompt Architect</h2>
        <p className="text-slate-600">
          Describe what you want to know. The Architect will align your request with the Playbook 
          and generate the perfect prompt (or warn you if it's a trap).
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-1">
        <div className="p-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What is your analysis goal?
          </label>
          <textarea
            className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none text-slate-800 placeholder-slate-400"
            placeholder="e.g., I want to see how much revenue we made last month compared to this month..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleAnalyze}
              disabled={loading || !input.trim()}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-indigo-200"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Consulting Playbook...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Optimize Prompt
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className={`mt-8 rounded-xl border-l-4 shadow-sm overflow-hidden animate-fade-in ${
          result.status === AnalysisStatus.SUCCESS 
            ? 'bg-green-50 border-green-500' 
            : result.status === AnalysisStatus.ERROR ? 'bg-red-50 border-red-500' : 'bg-amber-50 border-amber-500'
        }`}>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className={`mt-1 p-2 rounded-full ${
                 result.status === AnalysisStatus.SUCCESS ? 'bg-green-200 text-green-700' : 'bg-amber-200 text-amber-700'
              }`}>
                {result.status === AnalysisStatus.SUCCESS ? <CheckCircle2 size={24} /> : <AlertTriangle size={24} />}
              </div>
              
              <div className="flex-1">
                <h3 className={`text-lg font-bold mb-1 ${
                   result.status === AnalysisStatus.SUCCESS ? 'text-green-800' : 'text-amber-800'
                }`}>
                  {result.status === AnalysisStatus.SUCCESS ? 'Valid Strategy' : 'Playbook Warning'}
                </h3>
                <p className="text-slate-700 mb-2 text-sm">
                  {result.explanation}
                </p>
                {result.relevantSection && (
                  <span className="inline-block px-2 py-1 bg-white/50 rounded text-xs font-medium text-slate-600 mb-4 border border-black/5">
                    Ref: {result.relevantSection}
                  </span>
                )}

                {result.generatedPrompt && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Optimized Prompt</span>
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        <Copy size={12} /> Copy
                      </button>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 text-slate-800 font-mono text-sm leading-relaxed shadow-inner">
                      {result.generatedPrompt}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptArchitect;