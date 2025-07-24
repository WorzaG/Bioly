'use client'
import { photoUpload } from '@/lib/slices/dashSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Uploader({setUploader}) {

    const [file,setFile] = useState(null)
    const dispatch = useDispatch()

    const handleUpload = (e) => {
        e.preventDefault()
     //   console.log(file);
        const formData = new FormData()
        formData.append("image",file)
        dispatch(photoUpload(formData))
        setUploader(false)
    }

  return (
    <form
    onSubmit={handleUpload}
    className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
  >
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Profil Fotoğrafı Yükle</h2>
  
      <input
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0
                   file:text-sm file:font-semibold
                   file:bg-indigo-50 file:text-indigo-700
                   hover:file:bg-indigo-100
                   transition-all"
      />
  
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition"
      >
        Yükle
      </button>
  
      <button
        type="button"
        onClick={() => setUploader(false)} // modal'ı kapatmak için bir state
        className="text-sm text-gray-500 hover:underline"
      >
        Vazgeç
      </button>
    </div>
  </form>
  
  )
}
