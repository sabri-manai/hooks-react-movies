import { useState } from 'react';
import './App.css';
import { Data } from './Components/Data';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';

function App() {
  const [movies, setMovies] = useState(Data)
  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  const [rate, setRate] = useState(1);
  const handleRate = (x) => {
      setRate(x)
  }

  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
      setTitle(e.target.value)

  }

  return (
    <div className="App">
      <NavBar handleTitle={handleTitle}/>
      <Filter handleRate={handleRate}  />
      <MovieList movies={movies.filter((el)=>
      ( el.title === title || el.rate >= rate )
        
      )} />
      
      <AddMovie addFn={add} />
    </div>
  );
}

export default App;