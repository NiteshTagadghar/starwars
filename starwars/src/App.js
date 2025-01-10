import './App.css';
import { useContext, useEffect } from 'react';
import { MyContext } from './components/ContextProvider';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfor';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {

  return (
    <div className=" px-2  ">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 min-h-screen">
        <div className="col-span-2">
          <MovieList />
        </div>
        <div className="relative col-span-2">
          <div className="absolute top-0 left-0 h-screen border-l border-gray-300"></div>
          <MovieInfo />
        </div>
      </div>

    </div>
  );
}

export default App;
