import React, { ReactNode } from 'react'
import { getTimeOnLayoutCache } from '../actions'

export default function layout({children}: {children: ReactNode}) {
  const time = getTimeOnLayoutCache()
  
  return (
    <div>
      <div className='bg-black text-white'>{time}</div>
      {children}
    </div>
  )
}
