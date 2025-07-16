'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { totalClickCalculate, fetchLinks } from '@/lib/slices/dashSlice'

export default function DashboardHome() {
  const dispatch = useDispatch()
  const { myLinks, totalClick, mostClickedLink } = useSelector(state => state.dash)

  useEffect(() => {
    dispatch(fetchLinks())  // İlk yüklemede linkleri çek
  }, [dispatch])


  return (
    <div className=''>
       <h1 className="text-2xl font-bold text-gray-800 p-4">Dashboard</h1>
      <div className='text-center flex flex-col md:flex-row justify-center items-center'>
        <div className='w-3/5 max-w-3xs h-20 bg-gradient-to-b from-blue-500 to-indigo-500 p-0.5 rounded-2xl my-4'>
          <div className='w-full bg-white h-full rounded-[calc(1rem-2px)] flex flex-col items-center justify-center'>
            <h1 className='font-bold'>Toplam Tıklanma</h1>
            <p className='font-bold'>{totalClick}</p>
          </div>
        </div>

        <div className='w-3/5 max-w-3xs h-20 bg-gradient-to-b from-blue-500 to-indigo-500 p-0.5 rounded-2xl'>
          <div className='w-full bg-white h-full rounded-[calc(1rem-2px)] flex flex-col items-center justify-center'>
            <h1 className='font-bold'>En çok tıklanan linkin</h1>
            <p className=''>{
              mostClickedLink?.link_name
            }  {mostClickedLink?.click_count}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
