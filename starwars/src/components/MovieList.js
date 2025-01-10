import React, { useContext } from 'react'
import { MyContext } from './ContextProvider'

function MovieList() {

  const {movies,setSelectedMovie,convertToRoman} = useContext(MyContext)

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const totalStars = 10;
    const stars = [];
  
    for (let i = 1; i <= totalStars; i++) {
      if (i <= filledStars) {
        stars.push(<span key={i} className="text-yellow-500">★</span>); 
      } else {
        stars.push(<span key={i} className="text-gray-400">☆</span>); 
      }
    }
  
    return stars;
  };

  return (
    <table className="min-w-full mt-4 border-collapse">
    <tbody>
      {movies.map((movie, index) => (
        <tr
          key={index}
          className="cursor-pointer hover:bg-gray-100 border-b border-gray-300"
          style={{ minHeight: '60px' }} 
          onClick={() => setSelectedMovie(movie)}
        >
          <td className="px-6 py-4 ">EPISODE {convertToRoman(movie.episode_id)}</td>
          <td className="px-6 py-4 ">{movie.title}</td>
          <td className="px-6 py-4 ">{renderStars(movie.rating)}</td>
          <td className="px-6 py-4 ">{movie.release_date}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
  
  )
}

export default MovieList