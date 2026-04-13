import React from 'react'
import Header from '../components/Header'
import Column from '../components/Column'
import TicketModal from '../components/TicketModal'

export default function Board() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Column id="todo" />
          <Column id="inprogress" />
          <Column id="done" />
        </div>
      </main>
      <TicketModal />
    </div>
  )
}