import React from 'react'
import { getTimeOnLayoutCache } from '../actions'
import Link from 'next/link'

export default async function page() {
  const time = getTimeOnLayoutCache()
  return (
    <div>
      <h1>{time}</h1>
      <Link href="/layout-cache/other">Go to second page</Link>

    </div>
  )
}
