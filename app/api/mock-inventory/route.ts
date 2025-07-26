// next-app/app/api/mock-inventory/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const mockData = [
    { id: 1, name: "Item A", stock: 50 },
    { id: 2, name: "Item B", stock: 20 },
    { id: 3, name: "Item C", stock: 100 },
  ];

  return NextResponse.json(mockData);
}
