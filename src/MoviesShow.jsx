export function MoviesShow( {movie} ) {
  return (
    <div id="movies-show">
      <h1> Movie Info </h1>
      <h2> {movie.title} </h2>
      <img src={movie.image}/>
      <p> {movie.plot} </p>
      <h5> {movie.year} </h5>
    </div>
  )
}