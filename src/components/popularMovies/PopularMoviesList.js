import { getPopularMovies } from "../../utils/redux/MoviesSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopularMovie from "./PopularMovie";

const PopularMoviesList = () => {
  const PopularMoviesListData = useSelector(
    (state) => state.moviesList.popularMovies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  if (!PopularMoviesListData || PopularMoviesListData.length === 0)
    return null;

  return (
    <section className="py-4 sm:py-6">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        Popular Movies
      </h2>

      <div
        className="
          flex gap-3 sm:gap-4 md:gap-5
          overflow-x-auto overflow-y-hidden
          scrollbar-hide
          scroll-smooth
          snap-x snap-mandatory
          pb-2
        "
      >
        {PopularMoviesListData.map((movie) => (
          <div key={movie.id} className="snap-start">
            <PopularMovie posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularMoviesList;