import Banner from "../assets/image/rick_y_morty_banner.png";

const Header = () => {
  return (
    <header className="text-center banner pt-8 md:pt-0">
      <img
        className="inline-block w-full scale-150 sm:scale-100"
        src={Banner}
        alt="Rick y Morty banner"
      />
    </header>
  );
};

export default Header;
