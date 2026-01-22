import React from 'react';
import {
  BookOpen,
  Target,
  Layers,
  AlertTriangle,
  ShoppingBag,
  ListChecks,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Brain,
  Wand2,
  ChevronRight,
  CalendarDays,
  FileText
} from 'lucide-react';

interface PlaybookProps {
  onStartArchitect: () => void;
}

const SectionCard: React.FC<{ title: string; children: React.ReactNode; className?: string; icon?: React.ReactNode }> = ({ title, children, className = "", icon }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md ${className}`}>
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        {icon && (
            <div className="p-3 bg-slate-50 text-indigo-600 rounded-xl border border-slate-100 shrink-0">
                {icon}
            </div>
        )}
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      <div className="text-slate-600 leading-relaxed text-lg">
        {children}
      </div>
    </div>
  </div>
);

const Playbook: React.FC<PlaybookProps> = ({ onStartArchitect }) => {
  return (
    <div className="max-w-5xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="text-center py-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
          <BookOpen size={16} />
          Internal Methodology
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Klaviyo + GPT: <br />
          <span className="text-indigo-600">How We Use It</span>
          <span className="text-slate-300 mx-3 font-light">(and How We Don’t)</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
           The definitive guide to reasoning with Klaviyo data using GPT. Align expectations, remove friction, and get better answers.
        </p>

        {/* Featured Prompt Architect Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onStartArchitect}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transform hover:-translate-y-1"
          >
            <Wand2 className="w-6 h-6" />
            Launch Prompt Architect
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="grid gap-8 animate-fade-in-up">
        {/* 1. Why this playbook exists */}
        <SectionCard title="1. Why this playbook exists" icon={<Target size={28} />}>
          <p className="mb-4">
            This playbook exists so we are aligned on how we use the GPT + Klaviyo app and what we should expect from it. We already know Klaviyo. What changes here is adding GPT on top of Klaviyo data. That combination can be extremely useful, but only if we are clear on what the app can realistically do and where its limits are. When expectations are off, we waste time trying to reconcile numbers that were never meant to match or asking questions the tool is simply not built to answer.
          </p>
          <p className="font-medium text-slate-800">
            The purpose of this document is to define a shared way of thinking; How to reason with Klaviyo data using GPT. If we are aligned on this, the app becomes a strategic shortcut rather than a source of confusion.
          </p>
        </SectionCard>

        {/* 2. What the GPT + Klaviyo app actually does */}
        <SectionCard title="2. What the GPT + Klaviyo app actually does" icon={<Brain size={28} />}>
          <p className="mb-6">
            When we use the GPT + Klaviyo app, we are not interacting with the Klaviyo UI. We are not opening dashboards, clicking through Business Review, or looking at custom reports. What’s happening instead is simpler, but easy to misunderstand: GPT is working with the data Klaviyo makes available through its public API, and helping us analyze and reason through that data.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
            <h4 className="font-bold text-slate-800 mb-3">A simple way to think about it:</h4>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-rose-700 bg-rose-50 px-4 py-2 rounded-lg border border-rose-100">
                    <XCircle size={20} />
                    GPT does not see Klaviyo’s interface.
                </div>
                <div className="flex items-center gap-3 text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 size={20} />
                    GPT reads Klaviyo’s data and helps us think through it.
                </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/50 rounded-xl p-6 border border-emerald-100">
              <span className="font-bold text-emerald-800 block mb-4 flex items-center gap-2 uppercase text-sm tracking-wide">
                <CheckCircle2 size={18}/> Effective For
              </span>
              <ul className="space-y-3">
                {[
                    'Fast analysis and exploration', 
                    'Identifying trends and patterns', 
                    'Comparing periods', 
                    'Understanding drivers of performance', 
                    'Supporting planning and forecasting'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-emerald-900 text-sm font-medium">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-50/50 rounded-xl p-6 border border-rose-100">
              <span className="font-bold text-rose-800 block mb-4 flex items-center gap-2 uppercase text-sm tracking-wide">
                <XCircle size={18}/> Not Designed To
              </span>
              <ul className="space-y-3">
                {[
                    'Replicate dashboards', 
                    'Output final reporting numbers', 
                    'Replace Shopify analytics or BI'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-rose-900 text-sm font-medium">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-slate-500 italic">
            When we treat GPT like a fast, thoughtful analyst, it delivers real value.
          </p>
        </SectionCard>

        {/* 3. The Layered Model */}
        <SectionCard title="3. How Klaviyo data is structured: the layered model" icon={<Layers size={28} />}>
            <p className="mb-6">
                To use the GPT + Klaviyo app correctly, we need to understand how Klaviyo itself is structured. Klaviyo does not operate as a single layer of truth. It operates in layers, and each layer answers a different type of question.
            </p>
            <div className="space-y-6">
                <div className="relative overflow-hidden rounded-xl border-l-4 border-l-indigo-500 border border-slate-200 bg-white p-6 shadow-sm">
                     <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-indigo-900 text-lg">Layer 1: The public API layer</h4>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase">Accessible</span>
                     </div>
                     <p className="text-slate-600 mb-2">
                        This is the layer the GPT + Klaviyo app can actually access. It includes campaign and flow performance, engagement metrics, conversion metrics, events like Placed Order, and audience data. This is structured data designed to be queried and analyzed.
                     </p>
                     <div className="bg-slate-50 p-3 rounded text-sm text-slate-500">
                        <strong>Answers:</strong> "Which campaigns drove the most revenue?", "How did this period compare to another one?"
                     </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl border-l-4 border-l-slate-400 border border-slate-200 bg-slate-50 p-6 opacity-80">
                     <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800 text-lg">Layer 2: Klaviyo’s internal attribution</h4>
                        <span className="px-2 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded uppercase">Not Accessible</span>
                     </div>
                     <p className="text-slate-600">
                        This layer lives entirely inside Klaviyo. It powers Business Review, channel breakdowns, and deduplicated attribution logic. No external tool, including GPT, can access this layer directly.
                     </p>
                </div>

                <div className="relative overflow-hidden rounded-xl border-l-4 border-l-slate-400 border border-slate-200 bg-slate-50 p-6 opacity-60">
                     <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-800 text-lg">Layer 3: Dashboards and UI</h4>
                        <span className="px-2 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded uppercase">Not Accessible</span>
                     </div>
                     <p className="text-slate-600">
                        Visual outputs. If a number appears in a dashboard, it is valid, official, and the number we should use for reporting. GPT cannot directly access this layer.
                     </p>
                </div>
            </div>
        </SectionCard>

        {/* 4. The Rule of Thumb */}
        <div className="bg-slate-900 rounded-2xl p-10 text-center shadow-xl my-4 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
             <AlertTriangle className="text-amber-400 mx-auto mb-6 w-12 h-12" />
             <h3 className="text-2xl font-bold text-white mb-4">4. The rule of thumb we follow</h3>
             <p className="text-xl md:text-2xl text-slate-200 font-serif italic max-w-4xl mx-auto leading-relaxed">
               "Dashboards give us the final numeric answer. The API helps us understand and optimize that answer."
             </p>
             <p className="text-slate-400 mt-4 text-sm max-w-2xl mx-auto">
                 When we stick to this, analysis and reporting stay aligned. When we ignore it, we end up chasing mismatches that were never meant to line up perfectly.
             </p>
        </div>

        {/* 5. Products */}
        <SectionCard title="5. How we think about products" icon={<ShoppingBag size={28} />}>
          <p className="mb-6">
            Products are one of the most common sources of confusion. Klaviyo does receive product data as part of order events, but it is not designed to aggregate products like a BI tool.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
             <div>
                <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">We CAN analyze</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                   {[
                       'Which products are featured most often in campaigns',
                       'Which products are positioned as hero items',
                       'Which categories marketing emphasizes',
                       'Which products resonate with highly engaged audiences'
                   ].map(item => (
                       <li key={item} className="flex items-start gap-2">
                           <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5"/>
                           {item}
                       </li>
                   ))}
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-slate-900 mb-3 border-b border-slate-200 pb-2">We should NOT expect</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                   {[
                       'What were the top products sold overall',
                       'How much revenue a specific SKU generated',
                       'Which products drove marketing-attributed revenue'
                   ].map(item => (
                       <li key={item} className="flex items-start gap-2">
                           <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5"/>
                           {item}
                       </li>
                   ))}
                </ul>
             </div>
          </div>
          <div className="mt-6 bg-indigo-50 border border-indigo-100 p-4 rounded-lg text-center font-medium text-indigo-900">
              Klaviyo tells us which messages sold. Shopify tells us which products sold.
          </div>
        </SectionCard>

        {/* 6. Practical Framework */}
        <SectionCard title="6. A practical framework: what to ask and where to look" icon={<ListChecks size={28} />}>
            <p className="mb-8">
                The GPT + Klaviyo app works best when we ask questions focused on drivers, patterns, and decisions rather than exact totals.
            </p>
            
            <div className="space-y-8">
                {/* Good Questions */}
                <div>
                    <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><CheckCircle2 size={18} /></span>
                        Good questions to ask include
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                        {[
                            'What were the top campaigns this month and why?',
                            'Which flows contributed most meaningfully?',
                            'How did this period compare to last year?',
                            'What messaging themes show up in strong months?',
                            'Where do we see diminishing returns?',
                            'Which audiences respond better to urgency?'
                        ].map((q, i) => (
                            <li key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg text-slate-700 text-sm border border-slate-100">
                                <span className="text-indigo-400 font-bold">•</span> {q}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="h-px bg-slate-200"></div>

                {/* Dashboard Sources */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                             <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><FileText size={18} /></span>
                            Always pull from Dashboards
                        </h4>
                        <p className="text-xs text-slate-500 mb-3">These are "source of truth" numbers. Never infer them with GPT.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>• Total attributed revenue</li>
                            <li>• Campaign vs Flow revenue split</li>
                            <li>• Email vs SMS revenue split</li>
                            <li>• Official campaign/flow rankings</li>
                            <li>• Any number shared externally/QBRs</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><ArrowRight size={18} /></span>
                            Questions outside this app
                        </h4>
                        <p className="text-xs text-slate-500 mb-3">These belong in BI tools or Shopify.</p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>• Top products sold overall</li>
                            <li>• Revenue by SKU / Margin analysis</li>
                            <li>• Units sold by product</li>
                            <li>• Exact revenue reconciliation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionCard>

        {/* 7. Day to Day Use */}
        <SectionCard title="7. How we actually use the GPT + Klaviyo app day to day" icon={<CalendarDays size={28} />}>
            <p className="mb-6">
                In practice, this app works best as a thinking partner, not a reporting system. We get the most value from it during:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    'Weekly performance reviews',
                    'Monthly planning sessions',
                    'QBR preparation',
                    'Strategic brainstorms',
                    'Internal alignment',
                    'Explaining results to clients'
                ].map(use => (
                    <div key={use} className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl text-center text-indigo-900 font-medium text-sm flex items-center justify-center min-h-[80px]">
                        {use}
                    </div>
                ))}
            </div>
            <p className="mt-6 text-slate-500 text-sm text-center">
                Used this way, it saves time and improves the quality of decisions.
            </p>
        </SectionCard>

        {/* 8. Mental Model */}
        <SectionCard title="8. The mental model that matters most" icon={<Lightbulb size={28} />} className="bg-gradient-to-br from-white to-indigo-50/50 border-indigo-200">
           <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-full shadow-sm text-indigo-600 border border-indigo-100">
                  <Brain size={40} />
              </div>
              <div className="text-center md:text-left">
                  <p className="text-lg text-slate-700 leading-relaxed mb-2">
                     The most important takeaway is conceptual. The GPT + Klaviyo app <strong className="text-slate-900">does not replace BI</strong>.
                  </p>
                  <p className="text-xl font-bold text-indigo-700">
                     It reduces friction in how we think.
                  </p>
              </div>
           </div>
        </SectionCard>
      </div>

      <div className="mt-16 text-center">
         <p className="text-slate-400 mb-4">Ready to apply the framework?</p>
         <button
            onClick={onStartArchitect}
            className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors inline-flex items-center gap-2"
          >
            Open Prompt Architect <ArrowRight size={16} />
          </button>
      </div>
    </div>
  );
};

export default Playbook;