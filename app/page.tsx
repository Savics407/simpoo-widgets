"use client";

import { InventoryTable } from "@simpoobusiness/sdk";

export default function Page() {
  console.log("✅ Component Imported", InventoryTable);
  return (
    <div className="p-6 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">SimpooBusiness Inventory Management Widgets</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Inventory table widget</h2>
        <InventoryTable />

        <div
          className="fb-comments"
          data-href="https://simpoobusiness.com"
          data-width=""
          data-numposts="5"
        ></div>
      </div>
    </div>
  );
}
