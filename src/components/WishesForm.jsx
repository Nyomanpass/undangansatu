import React, { useState, useEffect } from 'react'

export default function WishesForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [attendance, setAttendance] = useState('hadir')
  const [submitting, setSubmitting] = useState(false)

  // load saved comments (wishes) dari localStorage, normalisasi replies
  const [comments, setComments] = useState(() => {
    try {
      const raw = localStorage.getItem('wishes_comments')
      const parsed = raw ? JSON.parse(raw) : []
      return parsed.map((c) => ({ replies: [], ...c })) // pastikan ada replies array
    } catch {
      return []
    }
  })

  useEffect(() => {
    // ambil komentar dari server
    let mounted = true
    fetch('/api/wishes')
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        if (mounted && Array.isArray(data)) setComments(data)
      })
      .catch(err => console.error('fetch wishes failed', err))
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('wishes_comments', JSON.stringify(comments))
    } catch (error) {
      console.error('Error saving comments to localStorage:', error)
    }
  }, [comments])

  // state untuk mengontrol reply form per comment
  const [replyOpen, setReplyOpen] = useState({}) // { [commentId]: true }
  const [replyName, setReplyName] = useState({}) // { [commentId]: 'Nama' }
  const [replyMessage, setReplyMessage] = useState({}) // { [commentId]: 'Pesan' }
  const [replySubmitting, setReplySubmitting] = useState({}) // { [commentId]: true }

  const timeAgo = (iso) => {
    const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
    if (diff < 60) return `${diff}s lalu`
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`
    return `${Math.floor(diff / 86400)}h lalu`
  }

  // pada submit, kirim ke server lalu update state
  const submit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) { alert('Mohon isi Nama dan Ucapan.'); return }
    setSubmitting(true)
    try {
      const newComment = { name: name.trim(), message: message.trim(), attendance, createdAt: new Date().toISOString() }
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      })
      const saved = res.ok ? await res.json() : newComment
      setComments(prev => [saved, ...prev])
      setName(''); setMessage(''); setAttendance('hadir')
    } catch (err) {
      console.error(err); alert('Gagal mengirim, coba lagi.')
    } finally { setSubmitting(false) }
  }

  // kirim reply ke komentar tertentu
  const submitReply = async (e, commentId) => {
    e.preventDefault()
    const rName = (replyName[commentId] || '').trim()
    const rMessage = (replyMessage[commentId] || '').trim()
    if (!rName || !rMessage) {
      alert('Mohon isi nama dan pesan balasan.')
      return
    }

    setReplySubmitting((s) => ({ ...s, [commentId]: true }))
    try {
      const newReply = {
        id: Date.now(),
        name: rName,
        message: rMessage,
        createdAt: new Date().toISOString(),
      }

      setComments((prev) =>
        prev.map((c) =>
          c.id === commentId ? { ...c, replies: [newReply, ...(c.replies || [])] } : c
        )
      )

      // reset reply inputs
      setReplyOpen((s) => ({ ...s, [commentId]: false }))
      setReplyName((s) => ({ ...s, [commentId]: '' }))
      setReplyMessage((s) => ({ ...s, [commentId]: '' }))
    } finally {
      setReplySubmitting((s) => ({ ...s, [commentId]: false }))
    }
  }

  const toggleReply = (id) => {
    setReplyOpen((s) => ({ ...s, [id]: !s[id] }))
  }

  const hadirCount = comments.filter((c) => c.attendance === 'hadir').length
  const tidakHadirCount = comments.filter((c) => c.attendance === 'tidak-hadir').length

  return (
    <section className="py-8 px-6" data-aos="fade-up">
      <div className="max-w-xl mx-auto">
        <h4 className="text-center text-2xl font-serif mb-4 text-gray-100">Ucapan dan Doa</h4>
        <p className="text-center font-serif mb-4 text-gray-100">
          Untaian doa dari Anda sangat bermakna bagi kami. Jika berkenan,  silakan tinggalkan ucapan dan doa terbaik Anda di bawah ini.
        </p>

        {/* Card */}
        <div className="bg-linear-to-b from-black/40 to-black/25 border border-white/10 rounded-2xl shadow-xl p-6">
          {/* attendance summary */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-sm flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-green-600 text-white font-medium">{hadirCount}</span>
              <span className="text-gray-300">Hadir</span>
            </div>
            <div className="text-sm flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-medium">{tidakHadirCount}</span>
              <span className="text-gray-300">Tidak Hadir</span>
            </div>
            <div className="text-sm text-gray-300 ml-4">{comments.length} Comments</div>
          </div>

          <form onSubmit={submit} className="space-y-3">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nama"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/80 border border-white/10 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Doa & Ucapan"
              className="w-full px-4 py-3 rounded-lg bg-gray-800/80 border border-white/10 text-gray-100 placeholder-gray-400 h-28 resize-y focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <select
              value={attendance}
              onChange={e => setAttendance(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/80 border border-white/10 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="hadir">Hadir</option>
              <option value="tidak-hadir">Tidak Hadir</option>
            </select>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white text-gray-900 font-medium shadow hover:scale-105 transform transition disabled:opacity-60"
              >
                {submitting ? 'Mengirim...' : 'Kirim'}
              </button>
            </div>
          </form>
        </div>

        {/* daftar komentar */}
        <div className="mt-6 space-y-4">
          {comments.length === 0 ? (
            <p className="text-center text-sm text-gray-400">Belum ada ucapan</p>
          ) : (
            comments.map((c) => (
              <div key={c.id} className="bg-black/80 border border-white/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gray-700 text-gray-100 flex items-center justify-center font-semibold">
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-100">{c.name}</div>
                        <div className="text-xs text-gray-400">{timeAgo(c.createdAt)}</div>
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-xs ${c.attendance === 'hadir' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                          {c.attendance === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
                        </span>
                      </div>
                    </div>

                    <p className="mt-2 text-gray-200">{c.message}</p>

                    {/* tombol reply */}
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleReply(c.id)}
                        className="text-sm text-green-400 hover:underline"
                      >
                        Reply
                      </button>
                      <div className="text-sm text-gray-400">{(c.replies || []).length} Balasan</div>
                    </div>

                    {/* reply form (toggle) */}
                    {replyOpen[c.id] && (
                      <form onSubmit={(e) => submitReply(e, c.id)} className="mt-3 space-y-2">
                        <input
                          value={replyName[c.id] || ''}
                          onChange={(e) => setReplyName((s) => ({ ...s, [c.id]: e.target.value }))}
                          placeholder="Nama"
                          className="w-full px-3 py-1 rounded bg-gray-700 border border-white/10 text-gray-100"
                        />
                        <textarea
                          value={replyMessage[c.id] || ''}
                          onChange={(e) => setReplyMessage((s) => ({ ...s, [c.id]: e.target.value }))}
                          placeholder="Balasan"
                          className="w-full px-3 py-2 rounded bg-gray-700 border border-white/10 text-gray-100"
                        />
                        <div className="flex gap-2">
                          <button
                            type="submit"
                            disabled={replySubmitting[c.id]}
                            className="px-3 py-1 rounded bg-white text-gray-900 text-sm"
                          >
                            {replySubmitting[c.id] ? 'Mengirim...' : 'Kirim Balasan'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setReplyOpen((s) => ({ ...s, [c.id]: false }))}
                            className="px-3 py-1 rounded bg-gray-600 text-white text-sm"
                          >
                            Batal
                          </button>
                        </div>
                      </form>
                    )}

                    {/* list balasan */}
                    {c.replies && c.replies.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {c.replies.map((r) => (
                          <div key={r.id} className="bg-white/3 border border-white/6 rounded-md p-3">
                            <div className="flex items-start gap-2">
                              <div className="w-8 h-8 rounded-full bg-gray-700 text-gray-100 flex items-center justify-center text-sm font-medium">
                                {r.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-gray-100">{r.name}</div>
                                  <div className="text-xs text-gray-400">{timeAgo(r.createdAt)}</div>
                                </div>
                                <p className="mt-1 text-gray-200 text-sm">{r.message}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
