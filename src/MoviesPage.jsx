import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";
import axios from "axios"
import { useState, useEffect} from "react"


export function MoviesPage() {
  
  useEffect(handleIndex, [])
  const [movies, setMovies] = useState([]);

  
  function handleIndex() {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data)
      setMovies(response.data)
    })
  }

  // function handleShow(movie) {
  // }

  return (
    <div>
      <MoviesNew />
      <MoviesIndex moviesProp={movies}/>
    </div>
  );
}
