const PopularMovie = ({ posterPath }) => {
  return (
    <div
      className="
        flex-shrink-0
        w-28 sm:w-36 md:w-44 lg:w-52 xl:w-56
        cursor-pointer
      "
    >
      <img
        className="
          rounded-md
          hover:scale-105
          transition-transform
          duration-300
          w-full
          h-auto
          object-cover
        "
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="movie-poster"
      />
    </div>
  );
};

export default PopularMovie;