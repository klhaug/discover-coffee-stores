'use client';
import React, { useEffect, useState } from 'react'
import Banner from './banner.client'
import useTrackLocation from '@/hooks/use-track-location';
import { CoffeeStoreType } from '@/types';
import Card from './card.server';



export default function NearbyCoffeeStores() {
    const {handleTrackLocation, isFindingLocation, longLat, locationErrorMsg} = useTrackLocation();

    const [coffeeStores, setCoffeestores] = useState([]);

    const handleOnClick = () => handleTrackLocation();

    useEffect(() => {
        async function coffeStoresByLocation() {
             if (longLat) {
                try {
                    const limit = 10;
                    const response = await fetch(`/api/getCoffeeStoresByLocation?longLat=${longLat}&limit=${limit}`                
                    );
                    const coffeeStores = await response.json();
                    setCoffeestores(coffeeStores);   
                } catch(error){
                    console.error("Couldn't fetch coffee stores by location", error)
                }                  
            }
        }
        coffeStoresByLocation();
    }, [longLat] )

    
  return (
    <div>
     <Banner handleOnClick = {handleOnClick} buttonText={isFindingLocation ? "Locating..." : 'View Stores Nearby' }/>
     {locationErrorMsg && <p>Error: {locationErrorMsg}</p>}

     {coffeeStores.length > 0 && <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Kafèer nær meg
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {coffeeStores.map((coffeeStore: CoffeeStoreType, idx: number) => (
              <Card
                key={`${coffeeStore.name}-${coffeeStore.id}`}
                name= {coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}?id=${idx}`}
                />
              )
            )}
            </div>
        </div>}
    </div>
  )
}
