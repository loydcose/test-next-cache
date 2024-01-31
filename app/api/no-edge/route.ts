import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const {searchParams} = new URL(req.url);
  const postId = searchParams.get("postId");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId)  
  const post = await res.json()

  return NextResponse.json({post})
}
