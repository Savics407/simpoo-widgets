import { useState } from "react";
import { WidgetId } from "../config/widgets";

interface CodeSnippetProps {
  activeWidget: WidgetId;
}

export default function CodeSnippet({ activeWidget }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const snippet =
      `const sdk = (window as any).SimpooSDK;\n` +
      `// Render the ${activeWidget} widget\n` +
      `sdk.renderWidget("${activeWidget}", "#widget-viewport");`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-16" style={{ animation: "fade-slide-up 0.55s 200ms ease both" }}>
      {/* Section label */}
      <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5">
        <div className="w-8 h-[2px] bg-slate-200" />
        <span>Implementation Reference</span>
      </div>

      <div className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl shadow-blue-900/10 transition-transform hover:scale-[1.005] duration-500">

        {/* Code header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/40" />
            <span className="text-[10px] font-bold font-mono text-slate-500">
              index.js
            </span>
          </div>
          <button
            id="copy-snippet-btn"
            onClick={handleCopy}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-lg transition-all
              ${copied
                ? "bg-emerald-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white"
              }`}
          >
            {copied ? "✓ Copied!" : "Copy Snippet"}
          </button>
        </div>

        {/* Syntax-highlighted snippet */}
        <div className="p-8 font-mono text-sm leading-[1.9] overflow-x-auto bg-[#020617] text-white whitespace-pre">
          <span className="text-[#ff7b72]">const</span>{" "}
          <span className="text-[#d2a8ff]">sdk</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-white">(</span>
          <span className="text-[#79c0ff]">window</span>{" "}
          <span className="text-[#ff7b72]">as</span>{" "}
          <span className="text-[#ff7b72]">any</span>
          <span className="text-white">).</span>
          <span className="text-[#d2a8ff]">SimpooSDK</span>
          <span className="text-white">;{"\n"}</span>
          <span className="text-slate-600 text-xs italic">
            {"// Render the "}
            {activeWidget}
            {" widget into your container\n"}
          </span>
          <span className="text-[#d2a8ff]">sdk</span>
          <span className="text-white">.</span>
          <span className="text-[#79c0ff]">renderWidget</span>
          <span className="text-white">(</span>
          <span className="text-[#a5d6ff]">"{activeWidget}"</span>
          <span className="text-white">, </span>
          <span className="text-[#a5d6ff]">"#widget-viewport"</span>
          <span className="text-white">);</span>
        </div>
      </div>
    </section>
  );
}
