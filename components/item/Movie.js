import PlayIcon from "../../icons/PlayIcon";
import classNames from "../../utils/classNames";
import Language from "../Language";
import TrailerButton from "../TrailerButton";
import HoverButton from "../TrailerButton";

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
      <div className="absolute bottom-0 w-full p-4 text-white duration-500 translate-y-full bg-gradient-to-t from-black via-black to-transparent group-hover:translate-y-0">
        <div className="text-lg">{movie.title}</div>
        <div className="flex gap-2 mt-2">
          {movie.genre.map((genre) => {
            return (
              <di
                key={genre}
                className="px-1.5 py-0.5 text-xs bg-red-600 rounded-md"
              >
                {genre}
              </di>
            );
          })}
        </div>
        <div className="mt-3 text-sm text-justify">{movie.description}</div>
        <div className="mt-2">
          <div className="text-base">Cast</div>
          <div className="flex gap-2 mt-2">
            {movie.casts.map((cast) => {
              return (
                <img
                  key={cast}
                  className="object-cover w-10 h-10 rounded-full"
                  src={cast.image}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute flex gap-2 top-2 right-2">
        {movie.languages.map((language) => {
          return <Language key={language} language={language} />;
        })}
        <TrailerButton
          onClick={() => {
            trailer();
          }}
        />
      </div>
      <div className="absolute flex justify-center h-6 gap-2 px-2 bg-black border-2 border-black rounded-md top-2 left-2">
        <div className="self-center text-sm font-bold text-white ">U/A</div>
      </div>
      {/* <div className="absolute top-0 w-full p-4 text-white duration-500 -translate-y-full bg-black bg-opacity-50 group-hover:translate-y-0">
        {movie.releaseDate}
      </div> */}
    </div>
  );
};
export default Movie;
