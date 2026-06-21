const VidoeTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-r from-black via-black/80 to-transparent z-20">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] px-4 sm:px-8 md:px-12 lg:px-16 mt-20 sm:mt-0">
        
        {/* Title */}
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          {title}
        </h1>

        {/* Overview */}
        <p className="text-white text-sm sm:text-base md:text-lg leading-6 sm:leading-7 w-full sm:w-[90%] md:w-[80%] mb-6 sm:mb-8 line-clamp-4 sm:line-clamp-none">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <button className="bg-white text-black px-5 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-opacity-80 transition">
            ▶ Play
          </button>

          <button className="bg-gray-500/70 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-lg font-semibold hover:bg-gray-400/70 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VidoeTitle;