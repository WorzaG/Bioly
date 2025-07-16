'use client'

import { useState } from 'react'

export default function AddModal({ isOpen, onClose, onEdit,title,link, id}) {
  const [formData, setFormData] = useState({
    id:id,
    title:title,
    link: link
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.link) return
    onEdit(formData)
    setFormData({
        id:'',
        title:'',
        link: ''
      })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 backdrop-blur-xs
    flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Düzenle</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Başlık</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              placeholder="Örn: Kişisel Blog"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              placeholder="https://ornek.com"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
