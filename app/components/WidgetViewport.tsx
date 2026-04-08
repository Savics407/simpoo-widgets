import { ReactNode, useEffect, useState } from "react";

interface WidgetViewportProps {
  children: ReactNode;
  sdkLoaded: boolean;
}

export default function WidgetViewport({
  children,
  sdkLoaded,
}: WidgetViewportProps) {
  const [linkPreview, setLinkPreview] = useState("");

  useEffect(() => {
    setLinkPreview(window.location.href);
  }, []);

  return (
    <section className="mb-12">
      <div
        className="bg-white rounded-4xl shadow-2xl shadow-slate-200/80 border border-slate-200/60 transition-all duration-300"
        style={{ animation: "fade-slide-up 0.55s 100ms ease both" }}
      >
        {/* Fake browser chrome */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4 rounded-t-4xl">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-amber-400/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
            </div>
            <div className="px-4 py-1.5 bg-white rounded-xl border border-slate-200 text-[10px] font-mono font-bold text-slate-400 shadow-sm hidden sm:flex items-center gap-2">
              <span className="text-blue-500">{linkPreview}</span>
            </div>
          </div>
          <div className="text-[10px] uppercase font-black tracking-[0.12em] text-slate-400 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
            Live Preview
          </div>
        </div>

        {/* Dynamic content - Modals/fixed children can now float freely */}
        <div className="min-h-[620px] w-full bg-white transition-all duration-500 rounded-b-4xl">
          {!sdkLoaded ? (
            <div className="flex flex-col items-center gap-6 py-32">
              <div className="relative">
                <div className="w-14 h-14 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                </div>
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest animate-pulse">
                Initialising SDK…
              </p>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  );
}
