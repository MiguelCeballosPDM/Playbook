import React, { useState } from 'react';
import { Book, Wand2 } from 'lucide-react';
import Playbook from './components/Playbook';
import PromptArchitect from './components/PromptArchitect';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PLAYBOOK);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Klaviyo <span className="text-indigo-600">+ GPT</span> <span className="font-normal text-slate-400">|</span> Playbook
            </h1>
          </div>
          
          <nav className="flex gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab(Tab.PLAYBOOK)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === Tab.PLAYBOOK 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Book size={16} />
              Read Guide
            </button>
            <button
              onClick={() => setActiveTab(Tab.PROMPT_ARCHITECT)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === Tab.PROMPT_ARCHITECT 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Wand2 size={16} />
              Prompt Architect
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === Tab.PLAYBOOK ? (
          <div className="animate-fade-in">
            <Playbook onStartArchitect={() => setActiveTab(Tab.PROMPT_ARCHITECT)} />
          </div>
        ) : (
          <div className="animate-fade-in">
             <PromptArchitect />
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Internal Playbook Tool. Not affiliated with Klaviyo.</p>
          <p className="mt-2">Use this tool to align GPT outputs with business reality.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;