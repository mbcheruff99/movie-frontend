import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";
import axios from "axios"
import { useState, useEffect} from "react"
import { Modal } from "./Modal"
import { MoviesShow } from "./MoviesShow"


export function MoviesPage() {
  
  useEffect(handleIndex, [])
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  
  function handleIndex() {
    axios.get("/movies.json").then((response) => {
      console.log(response.data)
      setMovies(response.data)
    })
  }

  function handleShow(movie) {
    console.log("handleShow", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  }

  function handleCreate(params) {
    console.log("handleCreate");
    axios.post("/movies.json", params).then((response) => {
      console.log(response.data);
      setMovies([...movies, response.data]);
    })
  }

  return (
    <div>
      <MoviesNew onCreate={handleCreate} />
      <MoviesIndex moviesProp={movies} onShow={handleShow} />
      <Modal show={isMoviesShowVisible} onClose={() => setIsMoviesShowVisible(false)}>
        <MoviesShow movie={currentMovie} />
      </Modal>
    </div>
  );
}
