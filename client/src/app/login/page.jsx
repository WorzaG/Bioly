'use client'
import { loginUser } from '@/lib/slices/authSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function LoginPage() {

    const router = useRouter()

    const dispatch = useDispatch()
  
    const { loading, error,token } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
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
  
      const result = await dispatch(loginUser(formData));
  
      if (result.meta.requestStatus === 'fulfilled') {
        router.push('/dashboard');
      }
    }
    
    
    useEffect(() => {

    if(token){
      router.push('/dashboard')
    }

    },[token,router])

    return (
      <div className="min-h-screen  flex items-center justify-center px-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Giriş Yap</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">

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
              {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
            </button>
  
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>
        </div>
      </div>
    )
}
