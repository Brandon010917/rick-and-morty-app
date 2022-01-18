import { useEffect, useState } from "react";

//axios
import axios from "axios";

const ResidentInfo = ({ url }) => {
  //State
  const [characterInfo, setCharacterInfo] = useState(null);

  const status =
    characterInfo?.status === "Alive"
      ? "alive"
      : characterInfo?.status === "Dead"
      ? "dead"
      : "unknown";

  //Effect
  useEffect(() => {
    setCharacterInfo(null);

    const handleFetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setCharacterInfo(data);
      } catch ({ response }) {
        console.log(response);
      }
    };

    handleFetchData();
  }, [url]);

  return (
    <>
      {characterInfo && (
        <article className="flex flex-col sm:flex-row resident-card text-white rounded-lg overflow-hidden w-full">
          <img
            className="resident-img"
            src={characterInfo.image}
            alt={characterInfo.name}
          />
          <div className="p-3">
            <p className="text-lg">{characterInfo.name}</p>
            <div className="flex gap-1 items-center">
              <span className={`w-2 h-2 rounded-full ${status}`}></span>
              <span>
                {characterInfo.status} - {characterInfo.species}
              </span>
            </div>
            <div className="mt-5">
              <p className="text-gray">Origin</p>
              <p>{characterInfo.origin.name}</p>
            </div>
            <div className="mt-5">
              <p className="text-gray">Episodes where appear</p>
              <p>{characterInfo.episode.length}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
