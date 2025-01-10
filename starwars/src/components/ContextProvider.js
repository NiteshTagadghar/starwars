import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const MyContext = createContext()
function ContextProvider({ children }) {
  const [storeMovies, setStoreMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);


  const getMovies = async () => {

    try {

      const movies = await axios.get("https://swapi.py4e.com/api/films/?format=json");
    
      const movieDetailsPromises = movies.data.results.map(async (movie) => {
        const year = movie.release_date.split("-")[0]; 
        const movieDetails = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&y=${year}&apikey=2ec30626`);
        movie.image = movieDetails.data.Poster
        movie.allRatings = movieDetails.data.Ratings
        movie.rating = movieDetails.data.imdbRating
        return movie
      });


      const movieDetails = await Promise.all(movieDetailsPromises);
      setMovies(movieDetails);
      setStoreMovies(movieDetails);
    } catch (error) {
      console.error('Error fetching movies or details:', error);
    }
  }

  const convertToRoman = (num) => {
    const romanMap = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let result = '';
    for (const { value, numeral } of romanMap) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <MyContext.Provider value={{ movies, selectedMovie, setSelectedMovie, convertToRoman, setMovies, storeMovies }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext }
export default ContextProvider