"use client";

import { useState, useEffect } from "react";

type Env = "dev" | "prod";

interface TopBarProps {
  apiKey: string;
  env: Env;
  onApiKeyChange: (val: string) => void;
  onEnvChange: (env: Env) => void;
  onMenuOpen: () => void;
}

export default function TopBar({
  apiKey,
  env,
  onApiKeyChange,
  onEnvChange,
  onMenuOpen,
}: TopBarProps) {
  // Briefly flash the API key input when env changes to signal "update your token"
  const [envJustChanged, setEnvJustChanged] = useState(false);

  const handleEnvChange = (next: Env) => {
    onEnvChange(next);
    setEnvJustChanged(true);
  };

  useEffect(() => {
    if (!envJustChanged) return;
    const t = setTimeout(() => setEnvJustChanged(false), 2500);
    return () => clearTimeout(t);
  }, [envJustChanged]);

  const isDev = env === "dev";

  return (
    <div className="fixed top-0 right-0 left-0 lg:left-72 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm z-10 px-5 lg:px-14 py-3 flex items-center gap-4">

      {/* Mobile hamburger */}
      <button
        id="mobile-menu-toggle"
        className="lg:hidden p-2 rounded-lg border border-slate-200 bg-white/70 hover:bg-white transition shrink-0"
        onClick={onMenuOpen}
      >
        <span className="block w-4 h-0.5 bg-slate-600 mb-1 rounded" />
        <span className="block w-4 h-0.5 bg-slate-600 mb-1 rounded" />
        <span className="block w-4 h-0.5 bg-slate-600 rounded" />
      </button>

      {/* Environment selector + hint */}
      <div className="flex flex-col gap-0.5 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hidden sm:block">
            Env
          </span>
          <div className="relative">
            <div
              className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full pointer-events-none
                ${isDev? "bg-emerald-500 animate-pulse" : "bg-violet-500 animate-pulse"}`}
            />
            <select
              id="env-select"
              value={env}
              onChange={(e) => handleEnvChange(e.target.value as Env)}
              className={`pl-6 pr-3 py-1 text-[10px] font-black italic rounded-full border appearance-none cursor-pointer outline-none transition-all
                ${isDev
                  ? "bg-emerald-50 border-emerald-100 text-emerald-600 focus:ring-2 focus:ring-emerald-300/40"
                  : "bg-violet-50 border-violet-100 text-violet-600 focus:ring-2 focus:ring-violet-300/40"
                }`}
            >
              <option value="dev">Dev Mode</option>
              <option value="prod">Production</option>
            </select>
          </div>
        </div>
        {/* Contextual hint — always visible, reinforces the relationship */}
        <p className="text-[9px] text-slate-400 font-medium pl-0.5 hidden sm:block">
          Each environment requires its own API key
        </p>
      </div>

      {/* API key input */}
      <div className="flex items-center gap-3 flex-1 max-w-md ml-auto">
        <label
          htmlFor="api-key-input"
          className="shrink-0 text-[10px] font-black text-slate-500 uppercase tracking-tight hidden sm:block"
        >
          API Key
        </label>
        <div className="relative flex-1 group">
          <input
            id="api-key-input"
            type="text"
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            placeholder={`Enter ${isDev ? "dev" : "production"} API key`}
            className={`w-full px-4 py-2 text-xs font-mono border rounded-xl focus:outline-none transition-all shadow-inner
              ${envJustChanged
                ? "border-amber-400 ring-4 ring-amber-400/20 bg-amber-50 placeholder:text-amber-500"
                : "bg-slate-50 border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 group-hover:border-slate-300"
              }`}
          />
          {/* Live sync hint when typing */}
          {!envJustChanged && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black text-blue-500 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
              Live Sync
            </div>
          )}
          {/* Env-change nudge */}
          {envJustChanged && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black text-amber-500 pointer-events-none animate-pulse">
              Update for {isDev ? "Dev" : "Prod"} →
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
