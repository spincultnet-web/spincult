import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold text-yellow-400 mb-6">
        SPINCULT
      </h1>

      <p className="text-xl text-center max-w-xl mb-8">
        Random decision tools.
        <br />
        Fast, free and fun.
      </p>

      <Link
        href="/app"
        className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-xl"
      >
        OPEN APP
      </Link>
    </main>
  );
}