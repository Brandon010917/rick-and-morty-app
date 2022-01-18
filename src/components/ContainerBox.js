import { useEffect, useState } from "react";

//axios
import axios from "axios";

//Componets
import Header from "./Header";
import SearchBox from "./SearchBox";
import LocationInfo from "./LocationInfo";
import ResidentsList from "./ResidentsList";
import Loader from "./Loader";

const ContainerBox = () => {
  //State
  const [locationInfo, setLocationInfo] = useState(null);
  const [residentsList, setResidentsList] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  //Effect
  useEffect(() => {
    setLoader(true);
    setResidentsList(null);
    setLocationInfo(null);
    setError(null);

    const handleFetchData = async () => {
      let url = "https://rickandmortyapi.com/api/location/";
      try {
        if (searchLocation) {
          url += "?name=" + searchLocation;
          const { data } = await axios.get(url);
          setLocationInfo(data.results[0]);
          setResidentsList(data.results[0].residents);
        } else {
          const getNumber = Math.floor(Math.random() * 126) + 1;
          url += getNumber;
          const { data } = await axios.get(url);
          setLocationInfo(data);
          setResidentsList(data.residents);
        }
      } catch ({ response }) {
        const error = {
          status: response.status || 404,
          statusText:
            response.statusText ||
            "An unexpected error occurred, please try again",
        };
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    handleFetchData();
  }, [searchLocation]);

  //Functions
  const handleSearchLocation = (location) => {
    setSearchLocation(location);
  };

  return (
    <>
      {loader && <Loader position="fixed" />}
      <Header />
      <SearchBox handleSearchLocation={handleSearchLocation} />
      {locationInfo && (
        <LocationInfo
          name={locationInfo.name}
          type={locationInfo.type}
          dimension={locationInfo.dimension}
          residents={locationInfo.residents.length}
        />
      )}
      <ResidentsList residents={residentsList} error={error} />
    </>
  );
};

export default ContainerBox;
