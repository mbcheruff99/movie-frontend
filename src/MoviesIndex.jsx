export function MoviesIndex(props) {
  return (
    <div id="movies-index">
      <h1> All {props.moviesProp.length} Movies </h1>
      {props.moviesProp.map((movie) => (
        <div key={movie.id} className="movies"> 
          <h2> {movie.first_name } {movie.last_name} </h2>
        </div>
      ))}


    </div>
  );
}
