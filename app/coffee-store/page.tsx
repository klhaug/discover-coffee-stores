import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      Coffee Store Page
      <Link href="/">Home</Link>
      <Link href="./asadf">Coffee</Link>
    </div>
  )
}
