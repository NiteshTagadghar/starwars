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
      height="10"
      width="200"
    />
    <p className="text-gray-700 mb-2 ml-2">{selectedMovie.opening_crawl}</p>

    </div>
    <p className="text-sm text-gray-500 mt-6">
      Directed by: <span className="font-semibold">{selectedMovie.director}</span>
    </p>

    <div className='flex mt-4 '>
      <p className="inline-block border-2  border-blue-500 text-blue-500 px-3 py-1 rounded-lg">
        {`${selectedMovie.allRatings[0].Source} : ${selectedMovie.allRatings[0].Value}`}
      </p>
      <p className="inline-block border-2 mx-2  border-blue-500 text-blue-500 px-3 py-1 rounded-lg">
        {`${selectedMovie.allRatings[1].Source} : ${selectedMovie.allRatings[1].Value}`}
      </p>
      <p className="inline-block border-2 mx-2  border-blue-500 text-blue-500 px-3 py-1 rounded-lg">
        {`${selectedMovie.allRatings[2].Source} : ${selectedMovie.allRatings[2].Value}`}
      </p>

    </div>
  </div>
  )
}

export default MovieInfor