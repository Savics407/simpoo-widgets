"use client";

import React, { useEffect } from "react";
import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Inject Script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@simpoobusiness/sdk/dist/simpoo-sdk.js";
    script.async = true;

    script.onload = () => {
      const sdk = (window as any).SimpooSDK;
      if (sdk && sdk.init) {
        sdk.init({ apiKey: "86a7a247-5289-475d-8deb-5df6f4b4f148" });
        sdk.renderWidget("inventory", "#inventory-widget");
      } else {
        console.error("SimpooSDK failed to load or methods are missing");
      }
    };
    document.body.appendChild(script);
  }, []);
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
