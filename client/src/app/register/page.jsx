'use client'
import { registerUser } from '@/lib/slices/authSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RegisterPage() {

  const router = useRouter()

  const dispatch = useDispatch()

  const { loading, error } = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await dispatch(registerUser(formData));

    if (result.meta.requestStatus === 'fulfilled') {
      router.push('/login');
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
 
    <div className='w-full md:px-2 flex items-center justify-center'>
    <div className="md:w-11/12 w-full max-w-[1450px] md:rounded-2xl bg-white shadow-md flex items-center justify-between p-2">
        <div className="flex items-end">
          <h1 className="font-bold text-xl text-blue-600">Bioly</h1>
          <h1 className="text-blue-600 text-sm">.app</h1>
        </div>
        <Link href="/login" className="text-black font-bold  p-2 text-sm rounded-lg">
          Giriş Yap
        </Link>
      </div>
    </div>

      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 mt-10">
      <h2 className="text-xl font-bold text-center text-blue-600 mb-6">Kayıt Ol</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder='username'
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder='email'
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder='password'
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  )
}
