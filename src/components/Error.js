const Error = ({ status, statusText }) => {
  return (
    <div className="text-2xl text-center">
      <p className=" mb-4">
        Error <span className="font-bold">{status}</span>: {statusText}
      </p>
    </div>
  );
};

export default Error;
