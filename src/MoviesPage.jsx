import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";

export function MoviesPage() {
  return (
    <div>
      <MoviesNew />
      <MoviesIndex/>
    </div>
  );
}
