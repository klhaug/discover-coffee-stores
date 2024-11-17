import React from 'react'
import Link from 'next/link'

export default async function Page({params}: {params: Promise<{id: string}>}) {
    const {id} = await params
  return (
    <div>
      Coffee Store Page: {id},
      <Link href="/"><button>Home</button></Link>
    </div>
  )
}
