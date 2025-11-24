import { Footer } from "./Footer";
import { Header } from "./Header";
import { MoviesPage } from "./MoviesPage";

function MovieIndex() {
  return (
  <h1> All Movies </h1>
  
  )
}

function App() {
  return (
    <div>
      <Header/>
      <MoviesPage/>
      <MovieIndex/>
      <Footer/>
    </div>
  );
}

export default App;

