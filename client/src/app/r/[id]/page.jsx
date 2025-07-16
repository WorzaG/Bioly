// src/app/r/[id]/page.jsx
'use client'

import { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { clickUpdate } from '@/lib/slices/dashSlice'

export default function RedirectPage({ params }) {
  const router = useRouter()
  const { id } = use(params)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(id);
    const handleRedirect = async () => {
      try { 
        const result = await dispatch(clickUpdate(id)).unwrap()

        if (result.data.link) {
          window.location.href = result.data.link
        } else {
          //router.push('/404')
        }
      } catch (error) {
        console.error('Yönlendirme hatası:', error)
        router.push('/404')
      }
    }

    handleRedirect()
  }, [id, router, dispatch])

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-gray-600 text-lg">Yönlendiriliyorsunuz...</p>
    </div>
  )
}
