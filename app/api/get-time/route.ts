import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila", {
    next: { revalidate: 5 },
  })
  const time = await res.json()

  return NextResponse.json(time)
}
