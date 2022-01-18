import Error from "./Error";
import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({ residents, error }) => {
  return (
    <section className="mt-10 container md:w-2/3 lg:w-1/2 xl:w-5/6 m-auto px-6 mb-8 min-h-fit">
      <div className="residents-list p-3 md:p-6 rounded-lg">
        <h2 className="text-2xl text-center mb-6 font-black">Residents</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 relative">
          {error ? (
            <Error status={error.status} statusText={error.statusText} />
          ) : residents?.length > 0 ? (
            residents.map((character) => (
              <ResidentInfo url={character} key={character} />
            ))
          ) : (
            <h2 className="title text-2xl text-center">
              There are no residents in this location
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResidentsList;
