import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"


export async function GET() {
  // const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
  // const time = await res.json()

  // return NextResponse.json(time)


  await new Promise(resolve => setTimeout(resolve, 1000))
  return NextResponse.json(Math.random())
}
