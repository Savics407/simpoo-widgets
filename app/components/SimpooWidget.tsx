"use client";

import { useEffect, useRef } from "react";

interface SimpooWidgetProps {
  widgetName: string;
  apiKey: string;
  env: "dev" | "prod";
  props?: Record<string, any>;
}

export default function SimpooWidget({
  widgetName,
  apiKey,
  env,
  props = {},
}: SimpooWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<{ unmount: () => void } | null>(null);

  useEffect(() => {
    const sdk = (window as any).SimpooSDK;
    if (!sdk || !sdk.renderWidget || !containerRef.current) return;

    // Initialize/Update config
    sdk.init({ apiKey, env });

    // Render widget
    let isMounted = true;
    sdk
      .renderWidget(widgetName, containerRef.current, props)
      .then((instance: any) => {
        if (!isMounted) {
          instance?.unmount?.();
          return;
        }
        instanceRef.current = instance;
      });

    return () => {
      isMounted = false;
      if (instanceRef.current) {
        instanceRef.current.unmount();
        instanceRef.current = null;
      }
    };
  }, [widgetName, apiKey, env, props]);

  return (
    <div id="widget-viewport" ref={containerRef} className="w-full h-full" />
  );
}
