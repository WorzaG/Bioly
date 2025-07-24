'use client'
import { fetchUser } from '@/lib/slices/authSlice'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Uploader from './components/Uploader'

export default function ProfilePage() {

    const [uploader,setUploader] = useState(false)
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
   // const { myLinks } = useSelector(state => state.dash)

    useEffect(() => {
        dispatch(fetchUser())
    },[])
   

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-gray-100 flex flex-col items-center justify-center">
      <div className='w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500' onClick={() => setUploader(true)}>
        <div className='w-23 h-23 rounded-full absolute bg-gray-700 opacity-50 flex items-center justify-center'>
          <p className='font-bold text-black opacity-100'>Edit</p>
        </div>
      <img
        src={user?.avatar_url
          ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${user.avatar_url}`
          : '/defaultProfile.png'}
        alt="Profil"
        className="w-auto h-auto rounded-full mx-auto mb-4 object-cover"
      />
      </div>

      <h2 className="text-xl font-semibold text-gray-800">{user?.username}</h2>
      <p className="text-sm text-gray-500">{user?.email}</p>
      <Link href={`/@${user?.username}`} target='_blank' className='w-7/12 max-w-[250px]' >
        <div className=' bg-blue-600 p-4 text-white rounded-xl my-4 text-center'>
          Profilime'e Git
        </div>
      </Link>
      {
        uploader && (<Uploader setUploader={setUploader} />)
      }
    </div>
  )
}
