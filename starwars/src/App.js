import './App.css';
import { useContext, useEffect } from 'react';
import { MyContext } from './components/ContextProvider';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfor';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <MovieList  />
        </div>
        <div>
          <MovieInfo  />
        </div>
      </div>
    </div>
  );
}

export default App;
