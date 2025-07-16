'use client'
import { fetchUser } from '@/lib/slices/authSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProfilePage() {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(fetchUser())
    },[])


  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md text-center">
      <img
        src={user?.avatar_url || '/defaultProfile.png'}
        alt="Profil"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
      />

      <h2 className="text-xl font-semibold text-gray-800">{user?.username}</h2>
      <p className="text-sm text-gray-500">{user?.email}</p>
    </div>
  )
}
