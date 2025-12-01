export function MoviesShow( {movie, onUpdate } ) {

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onUpdate(movie, params);
    form.reset();
  }

  return (
    <div id="movies-show">
      <h1> Movie Info </h1>
      <h2> {movie.title} </h2>
      <img src={movie.image}/>
      <p> {movie.plot} </p>
      {/* <p> {movie.actors} </p> */}
      <h5> {movie.year} </h5>
      <hr/> 
      <h2> Edit Movie </h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={movie.title} type="text" />
        </div>
        <div>
          Image URL: <input name="image" defaultValue={movie.image} type="text" />
        </div>
        <div>
          Plot: <input name="plot" defaultValue={movie.plot} type="text" />
        </div>
        <div>
          Release Year: <input name="year" defaultValue={movie.year} type="text" />
        </div>
        <button type="submit" > Update Movie </button>
      </form>
    </div>
  )
}