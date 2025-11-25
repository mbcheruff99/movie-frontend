import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";
import axios from "axios"
import { useState, useEffect} from "react"


export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  
  function handleIndex() {
    axios.get("http://localhost:3000/actors.json").then((response) => {
      console.log(response.data)
      setMovies(response.data)
    })
  }
  useEffect(handleIndex, [])

  return (
    <div>
      <MoviesNew />
      <MoviesIndex moviesProp={movies}/>
    </div>
  );
}
