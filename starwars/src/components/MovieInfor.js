import React, { useContext } from 'react'
import { MyContext } from './ContextProvider';

function MovieInfor() {


  const {selectedMovie,convertToRoman }= useContext(MyContext)


  if (!selectedMovie) {
    return <p className="text-center text-gray-500 mt-4">Select a movie to see the details.</p>;
  }

  
  return (
    <div className="mt-4 p-6 rounded-md shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">Episode {convertToRoman(selectedMovie.episode_id)} - {selectedMovie.title}</h2>
    <div className='flex'>
    <img
      src={selectedMovie.image}
      alt={selectedMovie.title}
      className="h-20 w-20 rounded-md mb-4"
    />
    <p className="text-gray-700 mb-2">{selectedMovie.opening_crawl}</p>

    </div>
    <p className="text-sm text-gray-500">
      Directed by: <span className="font-semibold">{selectedMovie.director}</span>
    </p>
  </div>
  )
}

export default MovieInfor