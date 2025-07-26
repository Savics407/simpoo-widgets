"use client";

import React from "react";
import "./global.css";
import { SimpooProvider } from "@simpoobusiness/sdk";
import "@simpoobusiness/sdk/dist/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <SimpooProvider apiKey="86a7a247-5289-475d-8deb-5df6f4b4f148">
          {children}
        </SimpooProvider>
      </body>
    </html>
  );
}
