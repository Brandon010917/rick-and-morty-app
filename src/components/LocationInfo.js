const LocationInfo = ({ name, type, dimension, residents }) => {
  return (
    <section className="mt-10 container md:w-2/3 lg:w-1/2 m-auto px-6 ">
      <div className="location-info p-6 text-center font-creepster rounded-lg">
        <h2 className="text-4xl title  font-bold mb-4">{name}</h2>
        <div className="container-info md:flex text-lg">
          <p>
            Type: <b className="ml-2 title text-lg">{type}</b>
          </p>
          <p className="my-4">
            Dimension: <b className="ml-2 title text-lg">{dimension}</b>
          </p>
          <p>
            Residents: <b className="ml-2 title text-lg">{residents}</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
