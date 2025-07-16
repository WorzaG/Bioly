'use client'

import Link from "next/link"
import ProtectedRoute from "./components/ProtectedRoute"
import { logout } from "@/lib/slices/authSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function DashboardLayout({ children }) {

  const dispatch = useDispatch()
  const [isOpen,setIsOpen] = useState(false)
  return (
    <ProtectedRoute>
      <div className="min-h-screen md:flex bg-gray-100">
        <div className="md:hidden py-2 px-4 w-full flex justify-between bg-white shadow-md text-xl">
          <div className="">
            <h1>Bioly</h1>
          </div>
          <div className=""  onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
        </div>
        {isOpen && (
  <div className="absolute top-10 left-0 w-full bg-white shadow-md z-50 p-4">
    <nav className="flex flex-col gap-4">
    <Link href="/dashboard">Anasayfa</Link>
        <Link href="/dashboard/links">Linklerim</Link>
        <Link href="/dashboard/profile">Profil</Link>
        <button className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md " onClick={() => dispatch(logout())}>Çıkış Yap</button>
    </nav>
  </div>
)}
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
          <h2 className="text-xl font-bold mb-6 text-blue-600">Bioly Panel</h2>
          <ul className="space-y-4 text-gray-700">
          <li><Link href="/dashboard">Anasayfa</Link></li>
        <li><Link href="/dashboard/links">Linklerim</Link></li>
        <li><Link href="/dashboard/profile">Profil</Link></li>
        <li><button className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md " onClick={() => dispatch(logout())}>Çıkış Yap</button></li>
        </ul>
        </aside>

        {/* Sayfa içeriği */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  )
}
