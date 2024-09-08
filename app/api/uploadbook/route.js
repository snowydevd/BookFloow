import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";

// POST para subir un libro
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  return await req.json();
}
