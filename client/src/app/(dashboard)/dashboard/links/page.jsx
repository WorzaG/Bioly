'use client'
import { addLink, deleteLink, fetchLinks, updateLink } from '@/lib/slices/dashSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddModal from './components/AddModal'
import EditModal from './components/EditModal'

export default function LinkManagePage() {
  const dispatch = useDispatch()

  const { myLinks } = useSelector(state => state.dash)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedLink, setSelectedLink] = useState(null)

  useEffect(() => {
    dispatch(fetchLinks())
  },[dispatch])

  const handleSelect = (selected) => {
    setSelectedLink(selected)
  }

  const handleEdit = (data) => {
    dispatch(updateLink(data))
  }

  const handleAdd = (newLink) => {
    dispatch(addLink(newLink))
  }

  const handleDelete = (id) => {
    dispatch(deleteLink(id))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Linklerim</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setIsModalOpen(true)}>
          + Yeni Link Ekle
        </button>
      </div>

      <div className="space-y-4">
        {myLinks.map((link) => (
          <div
            key={link.id}
            className="bg-white shadow-md rounded p-4 flex justify-between items-center"
          >
            <div className='overflow-hidden'>
              <p className="font-medium text-gray-900">{link.link_name}</p>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-xs lg:text-sm"
              >
                {link.link}
              </a>
            </div>

            <div className="flex gap-2">
              <button className="text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600" onClick={() => setSelectedLink(link)}>
                Düzenle
              </button>
              <button className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700" onClick={() => handleDelete(link.id)}>
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
      <AddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
      {
        selectedLink && (
          <EditModal 
          isOpen={!!selectedLink}
          onClose={() => setSelectedLink(null)}
          onEdit={handleEdit}
          data={selectedLink}
       />
        )
      }
    </div>
  )
}
