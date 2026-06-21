const Video = ({ keyValue }) => {
  if (!keyValue) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <iframe
        className="
          w-full h-full
          scale-[2.5]
          sm:scale-[1.8]
          md:scale-[1.5]
          lg:scale-125
        "
        src={`https://www.youtube.com/embed/${keyValue}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${keyValue}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default Video;