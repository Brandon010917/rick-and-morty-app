import logo from "../assets/image/rick_y_morty_logo.png";

const Loader = ({ position, top }) => {
  //Styles
  const styles = {
    position,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    background: "rgb(36, 40, 47)",
  };

  return (
    <div
      style={styles}
      className={`flex
      justify-center ${top ? "items-start" : "items-center"} h-full`}
    >
      <img
        className={`logo ${top ? "w-1/2" : "w-auto"}`}
        src={logo}
        alt="Rick and Morty Logo"
      />
    </div>
  );
};

export default Loader;
