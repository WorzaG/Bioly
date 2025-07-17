'use client'

import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-[1450px] flex items-center justify-between py-2">
        <div className="flex items-end">
          <h1 className="font-bold text-xl text-white">Bioly</h1>
          <h1 className="text-white text-sm">.app</h1>
        </div>
        <Link href="/login" className="text-white  p-2 text-sm rounded-lg">
          Giriş Yap
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center h-[calc(100vh-56px)]">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6">Bioly'e Hoş geldin!</h1>
          <p className="text-xl mb-8">
            Kendini anlatan link profili. Hepsi tek bir yerde.
          </p>
          <div className="space-x-4">
            <Link
              href="/register"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Hemen Başla
            </Link>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3/5 z-0 w-[100vw] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
  <Image
    src="/phone.png"
    alt="Bioly Telefon UI"
    width={1000}
    height={1000}
    className="w-full h-auto drop-shadow-2xl"
  />
</div>

        </div>
      </div>
    </main>
  );
}
