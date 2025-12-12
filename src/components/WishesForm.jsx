import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export default function WishesForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("hadir");
  const [submitting, setSubmitting] = useState(false);

  const [comments, setComments] = useState([]);

  // LOAD FIRESTORE
  useEffect(() => {
  const loadData = async () => {
    try {
      const snap = await getDocs(collection(db, "wishes"));
      const data = snap.docs.map((d) => {
        const item = d.data();
        return {
          id: d.id,
          ...item,
          createdAt: item.createdAt
            ? item.createdAt.toDate().toISOString()
            : null,
        };
      });

      setComments(
        data.map((c) => ({
          replies: c.replies || [],
          ...c,
        }))
      );
    } catch (err) {
      console.error("Error load:", err);
    }
  };

  loadData();
}, []);


  // SUBMIT COMMENT
  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert("Mohon isi Nama dan Ucapan.");
      return;
    }

    setSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "wishes"), {
        name,
        message,
        attendance,
        replies: [],
        createdAt: serverTimestamp(),
      });

      // update UI
      setComments((prev) => [
        {
          id: docRef.id,
          name,
          message,
          attendance,
          replies: [],
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ]);

      setName("");
      setMessage("");
      setAttendance("hadir");
    } catch (err) {
      console.error("submit error", err);
      alert("Gagal mengirim.");
    } finally {
      setSubmitting(false);
    }
  };

  // REPLY
  const [replyOpen, setReplyOpen] = useState({});
  const [replyName, setReplyName] = useState({});
  const [replyMessage, setReplyMessage] = useState({});
  const [replySubmitting, setReplySubmitting] = useState({});

  const submitReply = async (e, commentId, currentReplies) => {
    e.preventDefault();

    const rName = replyName[commentId]?.trim();
    const rMessage = replyMessage[commentId]?.trim();

    if (!rName || !rMessage) {
      alert("Mohon isi nama dan balasan.");
      return;
    }

    setReplySubmitting((s) => ({ ...s, [commentId]: true }));

    try {
      const newReply = {
        id: Date.now(),
        name: rName,
        message: rMessage,
        createdAt: new Date().toISOString(),
      };

      const ref = doc(db, "wishes", commentId);

      await updateDoc(ref, {
        replies: [newReply, ...currentReplies],
      });

      // update UI
      setComments((prev) =>
        prev.map((c) =>
          c.id === commentId
            ? { ...c, replies: [newReply, ...(c.replies || [])] }
            : c
        )
      );

      setReplyOpen((s) => ({ ...s, [commentId]: false }));
      setReplyName((s) => ({ ...s, [commentId]: "" }));
      setReplyMessage((s) => ({ ...s, [commentId]: "" }));
    } catch (err) {
      console.error("reply error", err);
    } finally {
      setReplySubmitting((s) => ({ ...s, [commentId]: false }));
    }
  };

  const timeAgo = (iso) => {
    const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
    if (diff < 60) return `${diff}s lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}j lalu`;
    return `${Math.floor(diff / 86400)}h lalu`;
  };

  const hadirCount = comments.filter((c) => c.attendance === "hadir").length;
  const tidakHadirCount = comments.filter((c) => c.attendance === "tidak-hadir").length;

  return (
  <section className="py-8 px-6">
  <div className="max-w-xl mx-auto">
    <h4 className="text-center text-2xl font-serif mb-4 text-gray-100">
      Ucapan dan Doa
    </h4>

    {/* STATE PAGINATION */}
    {(() => {
      const [currentPage, setCurrentPage] = useState(1);
      const commentsPerPage = 3;

      // Hitung pagination
      const indexOfLast = currentPage * commentsPerPage;
      const indexOfFirst = indexOfLast - commentsPerPage;
      var currentComments = comments.slice(indexOfFirst, indexOfLast);
      var totalPages = Math.ceil(comments.length / commentsPerPage);

      // Return section with pagination-enabled data
      return (
        <>
          {/* FORM */}
          <div className="bg-black/30 border border-white/10 p-6 rounded-xl">
            <div className="text-center mb-4 text-gray-200">
              {hadirCount} Hadir • {tidakHadirCount} Tidak Hadir • {comments.length} Comments
            </div>

            <form onSubmit={submit}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama"
                className="w-full px-3 py-2 bg-gray-800/70 border border-white/10 text-white rounded mb-2"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Doa & Ucapan"
                className="w-full px-3 py-2 bg-gray-800/70 border border-white/10 text-white rounded mb-2 h-24"
              />

              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800/70 border border-white/10 text-white rounded mb-4"
              >
                <option value="hadir">Hadir</option>
                <option value="tidak-hadir">Tidak Hadir</option>
              </select>

              <button
                type="submit"
                className="w-full py-2 bg-white rounded text-gray-900 font-medium"
              >
                {submitting ? "Mengirim…" : "Kirim"}
              </button>
            </form>
          </div>

          {/* COMMENTS */}
          <div className="mt-6 space-y-5">
            {currentComments.map((c) => (
              <div key={c.id} className="bg-black/70 border border-white/20 p-4 rounded-xl">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                    {c.name.charAt(0)}
                  </div>
                  <div className="flex-1 text-white">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">{c.name}</div>
                        <div className="text-xs text-gray-400">
                          {c.createdAt ? timeAgo(c.createdAt) : ""}
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          c.attendance === "hadir" ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        {c.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                      </span>
                    </div>

                    <p className="mt-2">{c.message}</p>

                    <button
                      className="text-green-400 text-sm mt-2"
                      onClick={() =>
                        setReplyOpen((s) => ({ ...s, [c.id]: !s[c.id] }))
                      }
                    >
                      Reply
                    </button>

                    {/* Reply Form */}
                    {replyOpen[c.id] && (
                      <form
                        onSubmit={(e) => submitReply(e, c.id, c.replies)}
                        className="mt-3 space-y-2"
                      >
                        <input
                          value={replyName[c.id] || ""}
                          onChange={(e) =>
                            setReplyName((s) => ({
                              ...s,
                              [c.id]: e.target.value,
                            }))
                          }
                          placeholder="Nama"
                          className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                        />

                        <textarea
                          value={replyMessage[c.id] || ""}
                          onChange={(e) =>
                            setReplyMessage((s) => ({
                              ...s,
                              [c.id]: e.target.value,
                            }))
                          }
                          placeholder="Balasan"
                          className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                        />

                        <button
                          type="submit"
                          className="px-4 py-1 bg-white text-gray-900 rounded"
                        >
                          {replySubmitting[c.id] ? "Mengirim…" : "Kirim Balasan"}
                        </button>
                      </form>
                    )}

                    {/* Reply List */}
                    {c.replies?.length > 0 && (
                      <div className="mt-3 space-y-3">
                        {c.replies.map((r) => (
                          <div key={r.id} className="bg-white/10 p-2 rounded">
                            <div className="text-sm font-medium text-white">
                              {r.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {timeAgo(r.createdAt)}
                            </div>
                            <p className="text-sm text-white mt-1">{r.message}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-white text-gray-900"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      );
    })()}
  </div>
</section>

  );
}
