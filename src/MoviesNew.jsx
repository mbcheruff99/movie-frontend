
export function MoviesNew() {
  return (
    <div id="movies-new">
      <h1> New Movie </h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <br />
        <div> 
          Image Link: <input type="text"/>
        </div>
        <br/>
        <div>
          Release Date: <input type="integer" />
        </div>
        <br />
        <div>
          Actors: <input type="text" />
        </div>
        <br />
        <div>
          Plot: <input type="text" />
        </div>
        <br />
      </form>
      <a href="https:chabad.org">
        <button type="submit"> Add Movie </button>
      </a>
    </div>
  );
}
