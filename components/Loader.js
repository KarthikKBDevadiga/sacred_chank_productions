import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className="flex">
        <img
          className="animate-rotate"
          src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
          alt=""
        />
        <img
          className="animate-rotate"
          src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1"
          alt=""
        />
      </div>
      <img
        src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1"
        alt=""
      />
    </div>
  );
};
export default Loader;
