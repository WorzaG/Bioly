'use client'
import { fetchProfile } from '@/lib/slices/userSlice'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProfilePage() {

    const {username} = useParams()
    console.log(username);

    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.user)
    useEffect(() => {
        dispatch(fetchProfile(username))
    },[])

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-md p-6 text-center">
        {/* Avatar */}
        <div className="p-[3px] rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 inline-block">
  <img
    src={profile.avatar_url || '/defaultProfile.png'}
    alt="avatar"
    className="w-24 h-24 rounded-full object-cover bg-white"
  />
</div>

        {/* Username */}
        <h2 className="text-xl font-bold text-gray-800">@{profile.username}</h2>

        {/* Bio (isteğe bağlı) */}
        {/* <p className="text-sm text-gray-600 mt-1">Frontend Developer • UI Lover</p> */}

        {/* Linkler */}
        <div className="mt-6 space-y-3">
          {profile.links?.map((link, index) => (
            <a
              key={index}
              href={`/r/${link.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-medium py-3 rounded-2xl transition duration-200"
            >
              {link.link_name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
