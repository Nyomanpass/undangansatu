import React, { useState } from 'react'

export default function WishesForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    // TODO: kirim ke API / firebase
    setName('')
    setMessage('')
    alert('Terima kasih, ucapan sudah dikirim.')
  }

  return (
    <section className="py-8 px-6" data-aos="fade-up">
      <h4 className="text-center text-2xl font-serif mb-4">Ucapan dan Doa</h4>
      <form onSubmit={submit} className="max-w-xl mx-auto space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Nama" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700"/>
        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Doa & Ucapan" className="w-full px-4 py-2 rounded bg-gray-800 h-32 border border-gray-700"/>
        <button className="px-5 py-2 rounded bg-white text-gray-900">Kirim</button>
      </form>
    </section>
  )
}
