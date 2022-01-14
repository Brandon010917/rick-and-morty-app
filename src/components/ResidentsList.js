import { useState } from "react";
import Loader from "./Loader";
import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({ residents }) => {
  //State
  const [loader, setLoader] = useState(false);

  return (
    <section className="mt-10 container md:w-2/3 lg:w-1/2 xl:w-5/6 m-auto px-6 mb-8">
      <div className="residents-list p-3 md:p-6 rounded-lg">
        <h2 className="text-2xl text-center mb-6 font-black">Residents</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 relative">
          {loader && <Loader position="absolute" top="10px" />}

          {residents?.map((character) => (
            <ResidentInfo
              url={character}
              key={character}
              setLoader={setLoader}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentsList;
