import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
  const time = await res.json()

  return NextResponse.json(time)
}
