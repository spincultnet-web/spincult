import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl font-bold text-yellow-400 mb-0">
          SPINCULT
        </h1>

     <p className="text-yellow-400 text-lg tracking-[0.2em] uppercase">
  Everything is a wheel.
</p>

        <div className="my-12">
  <div className="w-52 h-52 border-4 border-yellow-400 rounded-full relative mx-auto">

    <div className="absolute top-0 left-1/2 w-1 h-full bg-yellow-400 -translate-x-1/2"></div>

    <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 -translate-y-1/2"></div>

    <div className="absolute top-0 left-0 w-full h-full rotate-45">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 -translate-y-1/2"></div>
    </div>

    <div className="absolute top-0 left-0 w-full h-full -rotate-45">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 -translate-y-1/2"></div>
    </div>

  </div>
</div>

        <h2 className="text-4xl font-bold mb-4">
          Stop overthinking.
          <br />
          Let the wheel decide.
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Random decision tools for every situation.
          <br />
          Fast, free and fun.
        </p>

        <Link
          href="/app"
          className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-xl hover:bg-yellow-300 transition"
        >
          START NOW
        </Link>

        <div className="flex gap-8 mt-10 text-gray-400 text-sm">
          <span>⚡ Free</span>
          <span>🛡 No registration</span>
          <span>📱 Mobile friendly</span>
        </div>
      </section>

      {/* WHY SPINCULT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          WHY SPINCULT?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold mb-2">
              Quick decisions
            </h3>
            <p className="text-gray-400">
              Make a choice in seconds and keep moving.
            </p>
          </div>

          <div>
            <div className="text-6xl mb-6">🎲</div>
            <h3 className="text-2xl font-bold mb-2">
              Multiple tools
            </h3>
            <p className="text-gray-400">
              Wheels, dice, coin flips and more. All in the form of spinwheels.
            </p>
          </div>

          <div>
            <div className="text-6xl mb-6">❤️</div>
            <h3 className="text-2xl font-bold mb-2">
              Instant results
            </h3>
            <p className="text-gray-400">
              No setup. No account. Just decide.
            </p>
          </div>
        </div>
      </section>

      {/* AVAILABLE TOOLS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          AVAILABLE TOOLS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "YES / NO",
            "ROULETTE",
            "COIN FLIP",
            "FOOD WHEEL",
            "DICE ROLL",
            "MAGIC 8",
          ].map((tool) => (
            <div
              key={tool}
              className="border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-400 transition"
            >
              <h3 className="text-2xl font-bold mb-2">
                {tool}
              </h3>

              <p className="text-gray-400">
                Available inside the app.
              </p>
            </div>
          ))}

          <div className="border border-yellow-400 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              ...AND MORE
            </h3>

            <p className="text-gray-400">
              New tools will be added over time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border border-yellow-400 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to decide?
          </h2>

          <p className="text-gray-400 mb-8">
            Let SPINCULT make the call.
          </p>

          <Link
            href="/app"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >
            START NOW
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 SPINCULT. All rights reserved.
      </footer>
    </main>
  );
}