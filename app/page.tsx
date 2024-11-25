import Card from "@/components/card.server";
import NearbyCoffeeStores from "@/components/nearby-coffee-stores.client";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import { getDomain } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";

async function getData() {
  if (
    !process.env.MAPBOX_API ||
    !process.env.AIRTABLE_TOKEN
  ) {
    throw new Error("One of the API keys is not configured.")
  };

  const HAMAR_LONG_LAT = "11.068475457052749, 60.79707707338185";
  return await fetchCoffeeStores(HAMAR_LONG_LAT, 6);
}

export const metadata: Metadata = {
  title: 'Coffee Connoisseur',
  description: 'Allows you to discover coffee stores near you',
  metadataBase: getDomain(),
  alternates: {
    canonical: '/'
  },
}


export default async function Home() {
  const coffeeStores = await getData();

  return (
    <div className="mb-56">
      <Image className="absolute top-0 left-0 opacity-5"
            src="/static/icons/group7.svg"
            width="3900"
            height="3000"
            alt="places icon"/>
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <NearbyCoffeeStores />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Kafèer på Hamar
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
        </div>
      </main>
    </div>
      
  );
}
