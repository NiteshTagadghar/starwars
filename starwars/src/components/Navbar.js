import React, { useContext, useState } from 'react'
import { MyContext } from './ContextProvider'

function Navbar() {
  const { storeMovies, setMovies } = useContext(MyContext)

  const [selectedFilter, setSelectedFilter] = useState('default');

  const SORT_OPTION = {
    EPISODE: 1,
    DATE: 2
  }

  const sortMovies = (selectedOption) => {

    setSelectedFilter(selectedOption.toString())

    if (selectedOption == SORT_OPTION.DATE) {
      const movies = [...storeMovies].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB
      });

      setMovies(movies)
    }

    if (selectedOption == SORT_OPTION.EPISODE) {
      const movies = [...storeMovies].sort((a, b) => a.episode_id - b.episode_id)
      setMovies(movies)
    }

  }

  const updateMovieList = (search) => {
    const movies = [...storeMovies].filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    setMovies(movies)
  }

  const clearFilter = () => {
    setSelectedFilter('default');
    setMovies(storeMovies)
  };

  return (
    <div className="flex items-center p-4 space-x-4 bg-slate-200">
      <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => sortMovies(e.target.value)}
        value={selectedFilter}
      >
        <option value="default"  > Sort By </option>
        <option value={SORT_OPTION.DATE}>Release Date</option>
        <option value={SORT_OPTION.EPISODE}>Episode</option>
      </select>

      {selectedFilter !== 'default' && (
        <button
          className=" right-2 top-1/2 mt-6 transform -translate-y-1/2 text-gray-500 hover:text-red-500 focus:outline-none"
          onClick={clearFilter}
        >
          ✕
        </button>
      )}
      <input
        type="text"
        placeholder="Search for movies..."
        className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => updateMovieList(e.target.value)}
      />
    </div>

  )
}

export default Navbar