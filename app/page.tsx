"use client";

import { useEffect, useRef, useState } from "react";
import { WIDGET_REGISTRY, WidgetId } from "./config/widgets";
import AmbientBackground from "./components/AmbientBackground";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import WidgetViewport from "./components/WidgetViewport";
import SimpooWidget from "./components/SimpooWidget";
import CodeSnippet from "./components/CodeSnippet";

const SDK_SRC = "https://unpkg.com/@simpoobusiness/sdk/dist/simpoo-sdk.js";
const DEFAULT_API_KEY = "9ae9b021-89b7-4c97-b62c-dade87383fbc";

type Env = "dev" | "prod";

export default function Page() {
  const [apiKey, setApiKey] = useState(DEFAULT_API_KEY);
  const [env, setEnv] = useState<Env>("dev");
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [activeWidget, setActiveWidget] = useState<WidgetId>("inventory");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load SDK script once on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SDK_SRC;
    script.async = true;
    script.onload = () => {
      const sdk = (window as any).SimpooSDK;
      if (sdk?.init) {
        sdk.init({ apiKey, env });
        setSdkLoaded(true);
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeConfig = WIDGET_REGISTRY.find((w) => w.id === activeWidget)!;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <AmbientBackground />

      <Sidebar
        activeWidget={activeWidget}
        sdkLoaded={sdkLoaded}
        isOpen={sidebarOpen}
        onSelect={setActiveWidget}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 lg:ml-72 p-5 lg:p-14 pt-24 lg:pt-28">
        <TopBar
          apiKey={apiKey}
          env={env}
          onApiKeyChange={setApiKey}
          onEnvChange={setEnv}
          onMenuOpen={() => setSidebarOpen(true)}
        />

        {/* Page header */}
        <header
          className="mb-10"
          style={{ animation: "fade-slide-up 0.55s ease both" }}
        >
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-5">
              <span className="text-base">{activeConfig.icon}</span>
              {activeConfig.label}
            </div>
            <h1 className="text-5xl font-black tracking-tighter mb-4 text-slate-900 leading-[0.95]">
              {activeConfig.title}
            </h1>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              {activeConfig.description}
            </p>
          </div>
        </header>

        <WidgetViewport sdkLoaded={sdkLoaded}>
          <SimpooWidget widgetName={activeWidget} apiKey={apiKey} env={env} />
        </WidgetViewport>
        <CodeSnippet activeWidget={activeWidget} />
      </main>
    </div>
  );
}
