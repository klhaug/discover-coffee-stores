import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import { fetchCoffeeStores } from "@/lib/coffee-stores";

type CoffeeStoreType = {
  name: string,
  imgUrl: string,
  id: string,
  address: string
}

async function getData() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const coffeeStores = await getData();


  // const coffeeStoreId = 'dark-horse-coffe'
  // const coffeeStores = [
  //   {
  //       "name" : "Strangelove Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "WOWO Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "🐱Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "Strangelove Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "Strangelove Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "Strangelove Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "Strangelove Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  //   {
  //       "name" : "Strangelove Coffee",
  //       "imgUrl": '/static/bannerPic.webp'},
  // ]
 
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Kafèer på Hamar
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {coffeeStores.map((coffeeStore: CoffeeStoreType, idx: number) => (
              <Card
                key={`${coffeeStore.name}-${idx}`}
                name= {coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
                />
              )
            )}
            </div>
        </div>
      </main>
    </div>
      
  );
}
