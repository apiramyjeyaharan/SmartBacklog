import React from 'react'
import { Plus } from 'lucide-react'
import TicketCard from './TicketCard'

const DUMMY_TICKETS = {
  todo: [
    { id: '1', title: 'User authentication system', description: 'As a user, I want to log in with email and password.', points: 5, priority: 'high', criteria: ['Login form', 'Error message', 'Redirect on success'], aiGenerated: true },
    { id: '2', title: 'Stripe payment integration', description: 'As a user, I want to pay via Stripe.', points: 8, priority: 'blocking', criteria: ['Stripe form', 'PCI compliant', 'Webhook'], aiGenerated: true },
  ],
  inprogress: [
    { id: '3', title: 'Kanban drag and drop', description: 'As a PO, I want to drag tickets between columns.', points: 3, priority: 'high', criteria: ['Draggable', 'Drop zone', 'Count updates'], aiGenerated: true },
  ],
  done: [
    { id: '4', title: 'Project setup', description: 'Set up React, Tailwind and Express.', points: 2, priority: 'medium', criteria: [], aiGenerated: false },
  ]
}

export default function Column({ id, label, color }) {
  const tickets = DUMMY_TICKETS[id] || []

  return (
    <div className="flex flex-col min-h-[calc(100vh-120px)]">
      {/* Column header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${color}`} />
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            {label}
          </span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {tickets.length}
          </span>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
          <Plus size={14} />
        </button>
      </div>

      {/* Tickets */}
      <div className="flex-1 bg-gray-100/60 rounded-xl p-2 flex flex-col gap-2">
        {tickets.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-xs text-gray-400 text-center py-8">No tickets yet</p>
          </div>
        ) : (
          tickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  )
}