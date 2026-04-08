"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const SDK_SRC = "https://unpkg.com/@simpoobusiness/sdk/dist/simpoo-sdk.js";
  const DEFAULT_API_KEY = "9ae9b021-89b7-4c97-b62c-dade87383fbc";
  const [apiKey, setApiKey] = useState(DEFAULT_API_KEY);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SDK_SRC;
    script.async = true;
    script.onload = () => {
      const sdk = (window as any).SimpooSDK;
      if (sdk?.init) {
        sdk.init({ apiKey, env: "dev" });
      }
      sdk.renderWidget("inventory", "#widget");
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id="widget"></div>;
}
