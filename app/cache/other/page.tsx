"use client"

import { useEffect, useState } from "react"
import { getRandomNumber } from "@/app/actions"
import Link from "next/link"

// export const fetchCache = "force-cache"
// export const dynamic = "force-dynamic"


export default function Page() {
  const [number1, setNumber1] = useState<number | null>(null)

  useEffect(() => {
    const fetchNumber = async () => {
      const num = await fetch("http://localhost:3000/api/get-time")
      const json = await num.json()
      setNumber1(json)
    }

    fetchNumber()
  }, [])

  return (
    <>
      <h1>Page 2</h1>
      <Link href="/cache">Go to page 1</Link>
      <p>Random number: {number1}</p>
    </>
  )
}
