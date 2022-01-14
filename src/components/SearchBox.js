import { useState, useRef, useEffect } from "react";
import SearchForm from "./SearchForm";

const SearchBox = ({ handleSearchLocation }) => {
  //State
  const [page, setPage] = useState(1);
  const [locationList, setLocationList] = useState([]);

  //Effect
  useEffect(() => {
    const handleData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/location?page=" + page
      );
      const { info, results } = await response.json();

      results.map((location) =>
        setLocationList((prevState) => [...prevState, location.name])
      );

      if (info.next) {
        setPage(page + 1);
      }
    };

    handleData();
  }, [page]);

  //Ref
  const inputSearchRef = useRef();

  return (
    <section className="mt-20 container md:w-2/3 lg:w-1/2 m-auto px-6">
      <SearchForm
        locationList={locationList}
        inputSearchRef={inputSearchRef}
        handleSearchLocation={handleSearchLocation}
      />
    </section>
  );
};

export default SearchBox;
