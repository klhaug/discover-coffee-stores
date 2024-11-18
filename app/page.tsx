import Banner from "@/components/banner.client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const coffeeStoreId = 'dark-horse-coffe'
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <Banner />
        <Link href={`./coffee-store/${coffeeStoreId}`}>Coffee</Link>
        <Image 
          src= "/static/bannerPic.webp" 
          alt ="illustration of a woman drinking coffee"
          height={500}
          width={500}
          />
      </main>
  );
}
