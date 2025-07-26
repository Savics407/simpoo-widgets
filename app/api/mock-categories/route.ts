import { NextResponse } from "next/server";

export async function GET() {
  const mockData = [
    { id: "c1", name: "Electronics" },
    { id: "c2", name: "Groceries" },
    { id: "c3", name: "Fashion" },
  ];

  return NextResponse.json(mockData);
}
