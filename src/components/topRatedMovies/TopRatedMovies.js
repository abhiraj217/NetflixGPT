import MoviesList from "./MoviesList";

const TopRatedMovies = () => {
  return (
    <section
      className="
        relative z-30
        -mt-16 sm:-mt-20 md:-mt-28 lg:-mt-36
        bg-black
        px-3 sm:px-4 md:px-8 lg:px-12
        pb-8
      "
    >
      <MoviesList />
    </section>
  );
};

export default TopRatedMovies;