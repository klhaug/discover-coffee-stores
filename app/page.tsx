import Card from "@/components/card.server";
import NearbyCoffeeStores from "@/components/nearby-coffee-stores.client";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";
import Image from "next/image";

async function getData() {
  const HAMAR_LONG_LAT = "11.068475457052749, 60.79707707338185";
  return await fetchCoffeeStores(HAMAR_LONG_LAT, 6);
}


export default async function Home() {
  const coffeeStores = await getData();

  return (
    <div className="mb-56">
      <Image className="absolute top-0 left-0 w-full h-full opacity-40"
            src="/static/icons/group7.svg"
            width="2000"
            height="2000"
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
