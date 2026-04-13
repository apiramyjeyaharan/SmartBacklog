import React from 'react'
import Header from '../components/Header'
import Column from '../components/Column'

export default function Board() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <Column id="todo" label="To Do" color="bg-gray-400" />
          <Column id="inprogress" label="In Progress" color="bg-amber-400" />
          <Column id="done" label="Done" color="bg-teal-400" />
        </div>
      </main>
    </div>
  )
}
