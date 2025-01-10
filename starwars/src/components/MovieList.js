import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'

function MovieList() {

  const {movies,setSelectedMovie,convertToRoman} = useContext(MyContext)

  return (
    <table className="min-w-full  mt-4">
      <tbody>
        {movies.map((movie, index) => (
          <tr
            key={index}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedMovie(movie)}
          >
            <td className="border border-gray-300 px-4 py-2">EPISODE {convertToRoman(movie.episode_id)}</td>
            <td className="border border-gray-300 px-4 py-2">{movie.title}</td>
            <td className="border border-gray-300 px-4 py-2">{movie.rating} ⭐</td>
            <td className="border border-gray-300 px-4 py-2">{movie.release_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default MovieList