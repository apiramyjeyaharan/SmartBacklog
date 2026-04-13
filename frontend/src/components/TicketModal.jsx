import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useBoard } from '../context/BoardContext'

export default function TicketModal() {
  const { modalOpen, editingTicket, defaultColumn, closeModal, addTicket, updateTicket } = useBoard()

  const [form, setForm] = useState({
    title: '',
    description: '',
    column: 'todo',
    points: null,
    priority: 'medium',
    criteria: []
  })

  useEffect(() => {
    if (modalOpen) {
      if (editingTicket) {
        setForm({
          title: editingTicket.title,
          description: editingTicket.description || '',
          column: editingTicket.column,
          points: editingTicket.points || null,
          priority: editingTicket.priority || 'medium',
          criteria: editingTicket.criteria || []
        })
      } else {
        setForm({
          title: '',
          description: '',
          column: defaultColumn,
          points: null,
          priority: 'medium',
          criteria: []
        })
      }
    }
  }, [modalOpen, editingTicket, defaultColumn])

  if (!modalOpen) return null

  const handleSave = () => {
    if (!form.title.trim()) return
    if (editingTicket) {
      updateTicket(editingTicket.id, form)
    } else {
      addTicket(form)
    }
    closeModal()
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900">
            {editingTicket ? 'Edit ticket' : 'New ticket'}
          </h2>
          <button
            onClick={closeModal}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">

          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
              placeholder="e.g. Login page, Stripe payment..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
              placeholder="As a [user], I want to [action] so that [goal]..."
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
          </div>

          {/* Column */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1.5">
              Column
            </label>
            <select
              value={form.column}
              onChange={e => setForm(p => ({ ...p, column: e.target.value }))}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!form.title.trim()}
            className="px-4 py-2 text-sm font-medium bg-gray-900 hover:bg-gray-700 disabled:bg-gray-300 text-white rounded-lg transition-colors"
          >
            {editingTicket ? 'Save changes' : 'Create ticket'}
          </button>
        </div>

      </div>
    </div>
  )
}