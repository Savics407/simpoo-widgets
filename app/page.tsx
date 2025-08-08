"use client";

import { useState } from "react";

export default function Page() {
  const [apiValue, setApiValue] = useState("");
  return (
    <div className="p-6 flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">SimpooBusiness Inventory Management Widgets</h1>
      <div className="flex flex-col justify-center items-center gap-4 p-6 w-full">
        <div className="flex items-center gap-2">
          <label>API key: </label>
          <input
            type="text"
            placeholder="Enter API-key here..."
            className="border outline-0 px-2 rounded"
            value={apiValue}
            onChange={(e) => setApiValue(e.target.value)}
          />
          <button
            className="border rounded-md px-2  cursor-pointer "
            onClick={() => {
              sessionStorage.setItem("apiKey", apiValue);
              window.location.reload();
            }}
          >
            Enter
          </button>
        </div>
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
