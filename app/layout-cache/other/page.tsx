import { getTimeOnLayoutCache } from '@/app/actions'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const time = getTimeOnLayoutCache()
  return (
    <div>
      <h1>{time}</h1>
      <Link href="/layout-cache">Go to first page</Link>
    </div>
  )
}
