import React from 'react'
import Link from 'next/link'
import { fetchCoffeeStore } from '@/lib/coffee-stores';

async function getData(id: string) {
  return await fetchCoffeeStore(id); 
}

export default async function Page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params

  const coffeeStore = await getData(id);

  const {name = '', address = '', imgUrl = ''} = coffeeStore;
  
  return (
    <div className='h-full pb-80'>
      <div className='m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4'>
        <div className='mb-2 mt-24 text-lg font-bold'>
          <h1>{coffeeStore.name}</h1>
          <Link href="/" >⃪ Back to home</Link>
          <Image src ={imgUrl} width={740} height ={360} alt={name} />
        </div>
      </div>
    </div>
  )
}
