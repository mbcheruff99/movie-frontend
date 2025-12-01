
export function MoviesNew({onCreate}) {

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onCreate(params);
    form.reset();
  }

  return (
    <div id="movies-new">
      <h1> New Movie </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div> 
          Image URL: <input name="image" type="text"/>
        </div>
        <div>
          Release Date: <input year="image" type="integer" />
        </div>
        {/* <div>
          Actors: <input type="text" />
        </div> */}
        <div>
          Plot: <input name="plot" type="text" />
        </div>
        <a>
          <button type="submit" > Add Movie </button>
        </a>
      </form>
    </div>
  );
}
