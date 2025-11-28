export function MoviesIndex(props) {
  return (
    <div id="movies-index">
      <h1> All {props.moviesProp.length} Movies </h1>
      {props.moviesProp.map((movie) => (
        <div key={movie.id} className="movies"> 
          <h2> {movie.title} </h2>
          <img src={movie.image}/>
          <p> {movie.plot} </p>
          <h5> Released: {movie.year} </h5>
        </div>
      ))}


    </div>
  );
}
