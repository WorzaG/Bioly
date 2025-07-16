'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProtectedRoute({ children }) {
  const { token } = useSelector((state) => state.auth)
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (mounted && token === null) {
      router.push('/login')
    }
  }, [token, router, mounted])

  if (!mounted || typeof token === 'undefined') return <div>Yükleniyor...</div>

  return children
}
