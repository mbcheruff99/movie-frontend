export function MoviesIndex({ moviesProp, onShow }) {
  return (
    <div id="movies-index">
      <h1> All {moviesProp.length} Movies </h1>
      {moviesProp.map((movie) => (
        <div key={movie.id} className="movies"> 
          <h2> {movie.title} </h2>
          <img src={movie.image}/>
          <p> {movie.plot} </p>
          <h5> Released: {movie.year} </h5>
          <button onClick={() => onShow(movie)}> More Info </button>
        </div>
      ))}


    </div>
  );
}
