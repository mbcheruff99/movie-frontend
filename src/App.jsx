import axios from "axios"
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MoviesPage } from "./MoviesPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;


function App() {
  return (
    <div>
      <Header/>
      <MoviesPage/>
      <Footer/>
    </div>
  );
}

export default App;

