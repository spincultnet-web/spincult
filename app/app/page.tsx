"use client";

import { useState } from "react";

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const [coinSpinning, setCoinSpinning] = useState(false);
  const [coinRotation, setCoinRotation] = useState(0);

  const [activeWheel, setActiveWheel] = useState("yesno");
  
  const [rouletteRotation, setRouletteRotation] = useState(0); 
  
  const [foodSpinning, setFoodSpinning] = useState(false);
  const [foodRotation, setFoodRotation] = useState(0);

  const [die1Spinning, setDie1Spinning] = useState(false);
  const [die1Rotation, setDie1Rotation] = useState(0);

  const [die2Spinning, setDie2Spinning] = useState(false);
  const [die2Rotation, setDie2Rotation] = useState(0);
  
  const [magicSpinning, setMagicSpinning] = useState(false);
  const [magicRotation, setMagicRotation] = useState(0);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);

    const extraRotation = 1800 + Math.random() * 1800;

    setRotation((prev) => prev + extraRotation);

    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  const spinCoin = () => {
    if (coinSpinning) return;

    setCoinSpinning(true);

    const extraRotation = 1800 + Math.random() * 1800;

    setCoinRotation((prev) => prev + extraRotation);

    setTimeout(() => {
      setCoinSpinning(false);
    }, 3000);
  };
  const spinRoulette = () => {
  if (spinning) return;

  setSpinning(true);

  const extraRotation = 1800 + Math.random() * 1800;

  setRouletteRotation((prev) => prev + extraRotation);

  setTimeout(() => {
    setSpinning(false);
  }, 4000);
};

const spinFood = () => {
  if (foodSpinning) return;

  setFoodSpinning(true);

  const extraRotation = 1800 + Math.random() * 1800;

  setFoodRotation((prev) => prev + extraRotation);

  setTimeout(() => {
    setFoodSpinning(false);
  }, 4000);
};

const spinDie1 = () => {
  if (die1Spinning) return;

  setDie1Spinning(true);

  const extraRotation = 1800 + Math.random() * 1800;

  setDie1Rotation((prev) => prev + extraRotation);

  setTimeout(() => {
    setDie1Spinning(false);
  }, 3000);
};

const spinDie2 = () => {
  if (die2Spinning) return;

  setDie2Spinning(true);

  const extraRotation = 1800 + Math.random() * 1800;

  setDie2Rotation((prev) => prev + extraRotation);

  setTimeout(() => {
    setDie2Spinning(false);
  }, 3000);
};

const spinMagic = () => {
  if (magicSpinning) return;

  setMagicSpinning(true);

  const extraRotation = 1800 + Math.random() * 1800;

  setMagicRotation((prev) => prev + extraRotation);

  setTimeout(() => {
    setMagicSpinning(false);
  }, 4000);
};

  const labels = [
    "YES",
    "NO",
    "YES",
    "NO",
    "YES",
    "NO",
    "YES",
    "NO",
  ];
  const rouletteNumbers = [
  0,
  32, 15, 19, 4, 21, 2, 25,
  17, 34, 6, 27, 13, 36, 11,
  30, 8, 23, 10, 5, 24, 16,
  33, 1, 20, 14, 31, 9, 22,
  18, 29, 7, 28, 12, 35, 3, 26
];
const foodItems = [
  "PIZZA",
  "BURGER",
  "KEBAB",
  "SUSHI",
  "PASTA",
  "STEAK",
  "SALAD",
  "TACOS",
  "HOT DOG",
  "CHICKEN",
  "RAMEN",
  "BBQ",
];
const foodColors = [
  "#ff4d4d",
  "#ff944d",
  "#ffd24d",
  "#d4ff4d",
  "#66ff66",
  "#4dffd2",
  "#4dc3ff",
  "#4d66ff",
  "#944dff",
  "#ff4dff",
  "#ff66b3",
  "#ff8080",
];

const die1Values = [2, 1, 4, 3, 5, 6];

const die2Values = [4, 1, 5, 3, 6, 2];

const magicAnswers = [
  "YES",
  "ABSOLUTELY",
  "WITHOUT A DOUBT",
  "GO FOR IT",
  "CERTAINLY",
  "SIGNS POINT TO YES",
  "MOST LIKELY",
  "MAYBE",
  "ASK AGAIN",
  "TRY LATER",
  "NO",
  "VERY DOUBTFUL",
  "DON'T COUNT ON IT",
  "MY SOURCES SAY NO",
];

const renderDiceFace = (
  value: number,
  color: string
) => {
  const dot = (x: string, y: string) => (
    <div
      className={`absolute w-3 h-3 rounded-full ${color}`}
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );

  return (
    <div className="relative w-12 h-12">

      {(value === 1 || value === 3 || value === 5) &&
        dot("50%", "50%")}

      {(value >= 2) && (
        <>
          {dot("25%", "25%")}
          {dot("75%", "75%")}
        </>
      )}

      {(value >= 4) && (
        <>
          {dot("75%", "25%")}
          {dot("25%", "75%")}
        </>
      )}

      {value === 6 && (
        <>
          {dot("25%", "50%")}
          {dot("75%", "50%")}
        </>
      )}

    </div>
  );
};

  return (
    <main className="min-h-screen bg-black text-white flex">
      <aside className="w-56 border-r border-yellow-400 bg-gray-900 p-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          SPINCULT
        </h2>

        <button
          onClick={() => setActiveWheel("yesno")}
          className={`w-full text-left p-3 mb-2 rounded ${
            activeWheel === "yesno"
              ? "bg-yellow-400 text-black"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          YES / NO
        </button>

        <button
          onClick={() => setActiveWheel("roulette")}
          className={`w-full text-left p-3 mb-2 rounded ${
            activeWheel === "roulette"
              ? "bg-yellow-400 text-black"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          ROULETTE
        </button>

        <button
          onClick={() => setActiveWheel("coin")}
          className={`w-full text-left p-3 mb-2 rounded ${
            activeWheel === "coin"
              ? "bg-yellow-400 text-black"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          COIN FLIP
        </button>
        <button
  onClick={() => setActiveWheel("food")}
  className={`w-full text-left p-3 mb-2 rounded ${
    activeWheel === "food"
      ? "bg-yellow-400 text-black"
      : "bg-gray-800 hover:bg-gray-700"
  }`}
>
  FOOD WHEEL
</button>

<button
  onClick={() => setActiveWheel("dice")}
  className={`w-full text-left p-3 mb-2 rounded ${
    activeWheel === "dice"
      ? "bg-yellow-400 text-black"
      : "bg-gray-800 hover:bg-gray-700"
  }`}
>
  DICE ROLL
</button>

<button
  onClick={() => setActiveWheel("magic")}
  className={`w-full text-left p-3 mb-2 rounded ${
    activeWheel === "magic"
      ? "bg-yellow-400 text-black"
      : "bg-gray-800 hover:bg-gray-700"
  }`}
>
  MAGIC 8
</button>

      </aside>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">

        {activeWheel === "yesno" && (
          <>
            <h1 className="text-5xl font-bold">
              ⚖️ YES / NO WHEEL ⚖️
            </h1>

            <div className="text-6xl text-yellow-400">
              ▼
            </div>

            <div
              className="relative w-96 h-96 rounded-full border-8 border-white"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? "transform 3s ease-out" : "none",
                background:
                  "conic-gradient(#22c55e 0deg 45deg, #dc2626 45deg 90deg, #22c55e 90deg 135deg, #dc2626 135deg 180deg, #22c55e 180deg 225deg, #dc2626 225deg 270deg, #22c55e 270deg 315deg, #dc2626 315deg 360deg)",
              }}
            >
              {labels.map((text, index) => {
                const angle = 22.5 + index * 45;

                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 text-black font-bold text-lg"
                    style={{
                      transform: `
                        translate(-50%, -50%)
                        rotate(${angle}deg)
                        translateY(-145px)
                      `,
                    }}
                  >
                    {text}
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-gray-300 border-2 border-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <button
              onClick={spinWheel}
              className="px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold hover:bg-yellow-300 transition shadow-lg"
            >
              {spinning ? "SPINNING..." : "SPIN"}
            </button>
          </>
        )}
{activeWheel === "food" && (
  <>
    <h1 className="text-5xl font-bold">
      🍕 FOOD WHEEL 🍔
    </h1>

    <div className="text-6xl text-yellow-400">
      ▼
    </div>

    <div
      className="relative w-96 h-96 rounded-full border-8 border-white"
      style={{
        transform: `rotate(${foodRotation}deg)`,
        transition: foodSpinning ? "transform 4s ease-out" : "none",
        background: `conic-gradient(
          ${foodColors.map((color, i) => {
            const start = i * (360 / foodItems.length);
            const end = (i + 1) * (360 / foodItems.length);
            return `${color} ${start}deg ${end}deg`;
          }).join(", ")}
        )`,
      }}
    >
      {foodItems.map((food, index) => {
        const angle = 15 + index * (360 / foodItems.length);

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 text-black font-bold text-sm"
            style={{
              transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translateY(-145px)
              `,
            }}
          >
            {food}
          </div>
        );
      })}

      <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-gray-300 border-2 border-gray-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <button
      onClick={spinFood}
      className="px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold hover:bg-yellow-300 transition"
    >
      {foodSpinning ? "SPINNING..." : "SPIN"}
    </button>
  </>
)}
        {activeWheel === "coin" && (
          <>
            <h1 className="text-5xl font-bold">
              🪙 COIN FLIP 🪙
            </h1>

            <div className="text-6xl text-yellow-400">
              ▼
            </div>

            <div
              className="relative w-96 h-96 rounded-full border-8 border-yellow-500"
              style={{
                transform: `rotate(${coinRotation}deg)`,
                transition: coinSpinning ? "transform 3s ease-out" : "none",
                background:
                  "conic-gradient(#facc15 0deg 180deg, #eab308 180deg 360deg)",
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 text-black font-bold text-2xl"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(90deg)
                    translateY(-145px)
                  `,
                }}
              >
                HEADS
              </div>

              <div
                className="absolute left-1/2 top-1/2 text-black font-bold text-2xl"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(270deg)
                    translateY(-145px)
                  `,
                }}
              >
                TAILS
              </div>

              <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-yellow-200 border-2 border-yellow-700 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <button
              onClick={spinCoin}
              className="px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold hover:bg-yellow-300 transition shadow-lg"
            >
              {coinSpinning ? "SPINNING..." : "SPIN"}
            </button>
          </>
        )}

{activeWheel === "roulette" && (
  <>
    <h1 className="text-5xl font-bold">
      ⚪ ROULETTE ⚪
    </h1>

    <div className="text-6xl text-yellow-400">
      ▼
    </div>

    <div className="h-[370px] overflow-hidden flex items-start justify-center">
      <div
        className="relative w-[800px] h-[800px] rounded-full border-8 border-yellow-500"
        style={{
          transform: `rotate(${rouletteRotation}deg)`,
          transition: "transform 4s ease-out",
          background:
            "conic-gradient(green 0deg 9.73deg, red 9.73deg 19.46deg, black 19.46deg 29.19deg, red 29.19deg 38.92deg, black 38.92deg 48.65deg, red 48.65deg 58.38deg, black 58.38deg 68.11deg, red 68.11deg 77.84deg, black 77.84deg 87.57deg, red 87.57deg 97.3deg, black 97.3deg 107.03deg, red 107.03deg 116.76deg, black 116.76deg 126.49deg, red 126.49deg 136.22deg, black 136.22deg 145.95deg, red 145.95deg 155.68deg, black 155.68deg 165.41deg, red 165.41deg 175.14deg, black 175.14deg 184.87deg, red 184.87deg 194.6deg, black 194.6deg 204.33deg, red 204.33deg 214.06deg, black 214.06deg 223.79deg, red 223.79deg 233.52deg, black 233.52deg 243.25deg, red 243.25deg 252.98deg, black 252.98deg 262.71deg, red 262.71deg 272.44deg, black 272.44deg 282.17deg, red 282.17deg 291.9deg, black 291.9deg 301.63deg, red 301.63deg 311.36deg, black 311.36deg 321.09deg, red 321.09deg 330.82deg, black 330.82deg 340.55deg, red 340.55deg 350.28deg, black 350.28deg 360deg)",
        }}
      >
        {rouletteNumbers.map((number, index) => {
          const angle = (index + 0.5) * (360 / 37);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 text-white font-bold text-xl"
              style={{
                transform: `
                  translate(-50%, -50%)
                  rotate(${angle}deg)
                  translateY(-370px)
                `,
              }}
            >
              {number}
            </div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 w-10 h-10 bg-yellow-200 border-2 border-yellow-700 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>

    <button
      className="px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold hover:bg-yellow-300 transition shadow-lg"
      onClick={spinRoulette}
    >
      {spinning ? "SPINNING..." : "SPIN"}
    </button>
  </>
)}

{activeWheel === "dice" && (
  <>
    <h1 className="text-5xl font-bold">
      🎲 DICE ROLL 🎲
    </h1>

    <div className="flex gap-16 items-start">

      {/* DIE 1 */}
      <div className="flex flex-col items-center">

        <div className="text-5xl text-yellow-400 mb-2">
          ▼
        </div>

        <div
          className="relative w-80 h-80 rounded-full border-8 border-white"
          style={{
            transform: `rotate(${die1Rotation}deg)`,
            transition: die1Spinning
              ? "transform 3s ease-out"
              : "none",
            background:
              "conic-gradient(white 0deg 60deg, black 60deg 120deg, white 120deg 180deg, black 180deg 240deg, white 240deg 300deg, black 300deg 360deg)",
          }}
        >

          {die1Values.map((value, index) => {
            const angle = 30 + index * 60;

            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 font-bold text-4xl ${
                  index % 2 === 0
                    ? "text-black"
                    : "text-white"
                }`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateY(-115px)
                  `,
                }}
              >
                {renderDiceFace(
  value,
  index % 2 === 0
    ? "bg-black"
    : "bg-white"
)}
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="text-yellow-400 text-2xl font-bold mt-3">
          DIE 1
        </div>

        <button
          onClick={spinDie1}
          className="mt-3 px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold"
        >
          {die1Spinning ? "SPINNING..." : "ROLL DIE 1"}
        </button>

      </div>

      {/* DIE 2 */}
      <div className="flex flex-col items-center">

        <div className="text-5xl text-yellow-400 mb-2">
          ▼
        </div>

        <div
          className="relative w-80 h-80 rounded-full border-8 border-white"
          style={{
            transform: `rotate(${die2Rotation}deg)`,
            transition: die2Spinning
              ? "transform 3s ease-out"
              : "none",
            background:
              "conic-gradient(white 0deg 60deg, black 60deg 120deg, white 120deg 180deg, black 180deg 240deg, white 240deg 300deg, black 300deg 360deg)",
          }}
        >

          {die2Values.map((value, index) => {
            const angle = 30 + index * 60;

            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 font-bold text-4xl ${
                  index % 2 === 0
                    ? "text-black"
                    : "text-white"
                }`}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateY(-115px)
                  `,
                }}
              >
                {renderDiceFace(
  value,
  index % 2 === 0
    ? "bg-black"
    : "bg-white"
)}
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="text-yellow-400 text-2xl font-bold mt-3">
          DIE 2
        </div>

        <button
          onClick={spinDie2}
          className="mt-3 px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold"
        >
          {die2Spinning ? "SPINNING..." : "ROLL DIE 2"}
        </button>

      </div>

    </div>
  </>
)}

{activeWheel === "magic" && (
  <>
    <h1 className="text-5xl font-bold">
      🎱 MAGIC 8 🎱
    </h1>

    <div className="text-6xl text-yellow-400">
      ▼
    </div>

    <div
      className="relative w-98 h-98 rounded-full border-8 border-white"
      style={{
        transform: `rotate(${magicRotation}deg)`,
        transition: magicSpinning
          ? "transform 4s ease-out"
          : "none",
        background: `conic-gradient(
          #0f172a 0deg 25.7deg,
          #1e3a8a 25.7deg 51.4deg,
          #172554 51.4deg 77.1deg,
          #1d4ed8 77.1deg 102.8deg,
          #0f172a 102.8deg 128.5deg,
          #1e3a8a 128.5deg 154.2deg,
          #172554 154.2deg 179.9deg,
          #1d4ed8 179.9deg 205.6deg,
          #0f172a 205.6deg 231.3deg,
          #1e3a8a 231.3deg 257deg,
          #172554 257deg 282.7deg,
          #1d4ed8 282.7deg 308.4deg,
          #0f172a 308.4deg 334.1deg,
          #1e3a8a 334.1deg 360deg
        )`,
      }}
    >

      {magicAnswers.map((answer, index) => {
        const angle =
          (360 / magicAnswers.length) * index +
          (360 / magicAnswers.length) / 2;

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 text-white font-bold text-xs text-center"
            style={{
              width: "90px",
              transform: `
               translate(-50%, -50%)
               rotate(${angle}deg)
               translateY(-130px)
               rotate(90deg)
              `,
            }}
          >
            {answer}
          </div>
        );
      })}

      <div className="absolute left-1/2 top-1/2 w-24 h-24 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

        <span className="text-black text-5xl font-bold">
          8
        </span>

      </div>
    </div>

    <button
      onClick={spinMagic}
      className="px-8 py-3 bg-yellow-400 text-black rounded-xl text-2xl font-bold"
    >
      {magicSpinning ? "SPINNING..." : "SPIN"}
    </button>
  </>
)}

      </div>
    </main>
  );
}
