import Banner from "@/components/banner.client";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card.server";
import { fetchCoffeeStores } from "@/lib/coffee-stores";

async function getData() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const {suggestions} = await getData();
  console.log({suggestions});

  const coffeeStoreId = 'dark-horse-coffe'
  const coffeeStores = [
    {
        "name" : "Strangelove Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "WOWO Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "🐱Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "Strangelove Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "Strangelove Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "Strangelove Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "Strangelove Coffee",
        "imgUrl": '/static/bannerPic.webp'},
    {
        "name" : "Strangelove Coffee",
        "imgUrl": '/static/bannerPic.webp'},
  ]
 
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Toronto Stores
          </h2>
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
        </div>
      </main>
    </div>
      
  );
}
