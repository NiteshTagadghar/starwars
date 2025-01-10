import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center p-4 space-x-4">
    <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option>Sort By</option>
      <option>Title</option>
      <option>Rating</option>
      <option>Release Date</option>
    </select>
    <input
      type="text"
      placeholder="Search for movies..."
      className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  )
}

export default Navbar