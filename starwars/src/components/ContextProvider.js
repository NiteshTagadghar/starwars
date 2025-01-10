import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const MyContext = createContext()
function ContextProvider({children}) {

  const [movies,setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovies = async() =>{
    console.log("getting movies")
    const movies = await axios.get("https://swapi.py4e.com/api/films/?format=json")
    console.log(movies.data.results,'movies')
    setMovies(movies.data.results)
  }

  const convertToRoman =(num)=>{
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
  
  useEffect(()=>{
    getMovies()
  },[])

  return (
    <MyContext.Provider value={{movies,selectedMovie,setSelectedMovie,convertToRoman}}>
        {children}
    </MyContext.Provider>
  )
}

export {MyContext}
export default ContextProvider