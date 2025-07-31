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
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0&appId=1485523188599465"
        ></script>
        <SimpooProvider apiKey="86a7a247-5289-475d-8deb-5df6f4b4f148">
          {children}
        </SimpooProvider>
      </body>
    </html>
  );
}
