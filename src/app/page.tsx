import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-neutral-100">
      <Link href="/scientific" className="text-2xl font-semibold">Scientific</Link>
    </main>
  );
}