"use client";
import { useEffect } from "react";

export default function Page() {
  return (
    <div className="p-6 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">SimpooBusiness Inventory Management Widgets</h1>
      <div className="flex flex-col justify-center items-center gap-4 p-6 w-full">
        <h2 className="text-2xl">Inventory table widget</h2>
        {/* <InventoryTable /> */}
        <div id="inventory-widget" className="w-full"></div>

        {/* <div
          className="fb-comments"
          data-href="https://simpoobusiness.com"
          data-width=""
          data-numposts="5"
        ></div> */}
      </div>
    </div>
  );
}
