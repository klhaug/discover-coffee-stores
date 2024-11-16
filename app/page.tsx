import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <h1>Coffee Connoisseur</h1>
        <h2>The best coffee shops in town</h2>
        <Link href="/dashboard">
          <button>This is a button</button>
        </Link>
      </main>
  );
}
