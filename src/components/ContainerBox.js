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

  //Effect
  useEffect(() => {
    setLoader(true);

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
      } catch (error) {
        /*  console.log(error.response); */
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
      {loader && (
        <Loader position="fixed" />
      )}
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
      {residentsList?.length > 0 && <ResidentsList residents={residentsList} />}
    </>
  );
};

export default ContainerBox;
