import Banner from "@/components/banner.client";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card.server";

export default function Home() {
 
  const coffeeStoreId = 'dark-horse-coffe'
  const coffeeStores = [
    {
        "name" : "Strangelove Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "WOWO Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "🐱Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "Strangelove Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "Strangelove Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "Strangelove Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "Strangelove Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
    {
        "name" : "Strangelove Coffee",
        "imgUrl": "https://unsplash.com/photos/coffee-beans-beside-coffee-powder-on-brown-wooden-board-KixfBEdyp64"
    },
  ]
 
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          {coffeeStores.map((coffeStore, idx) => (
            <Card 
              key={`${coffeStore.name}-${idx}`}
              name= {coffeStore.name}
              imgUrl={coffeStore.imgUrl}
              href={`/coffee-store/${coffeeStoreId}`}
              />
            ) 
          )}
          </div>
      </main>
    </div>
      
  );
}
