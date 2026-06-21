import { useSelector, useDispatch } from "react-redux";
import TopRatedMovie from "./TopRatesMovie";
import { gettopRatedMovies } from "../../utils/redux/MoviesSlice";
import { useEffect } from "react";

const MoviesList = () => {
  const topRatedMoviesData = useSelector(
    (state) => state.moviesList.topRatedMovies
  );

  console.log(topRatedMoviesData ,"topratedMovies")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettopRatedMovies());
  }, [dispatch]);

  if (!topRatedMoviesData || topRatedMoviesData.length === 0) return null;

  return (
    <section className="py-4">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
        Top Rated Movies
      </h2>

      <div className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
        {topRatedMoviesData.map((movie) => (
          <TopRatedMovie
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviesList;