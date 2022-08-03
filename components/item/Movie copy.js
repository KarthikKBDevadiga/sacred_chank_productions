import classNames from "../../utils/classNames";

const Movie = ({ movie, trailer, className }) => {
  return (
    <div
      className={classNames(
        "relative overflow-hidden bg-white rounded-md shadow-md cursor-pointer group",
        className
      )}
    >
      <img
        className="object-cover w-full h-full duration-500 group-hover:grayscale group-hover:scale-110"
        src="https://www.filmibeat.com/fanimg/movie/17945/gaalipata-2-photos-images-64053.jpg"
      />
      <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
        <div className="text-xl">{movie.title}</div>
        <div className="text-sm">(KANNADA)</div>
        <div className="mt-2">{movie.description}</div>
        <div
          className="px-2 py-1 mx-auto mt-4 text-white duration-500 border border-white rounded-md cursor-pointer w-max hover:bg-white hover:text-black"
          onClick={() => {
            trailer();
          }}
        >
          WATCH TRAILER
        </div>
      </div>
      <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
        {movie.releaseDate}
      </div>
    </div>
  );
};
export default Movie;
