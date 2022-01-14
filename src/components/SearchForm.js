import { useState } from "react";

const SearchForm = ({ locationList, inputSearchRef, handleSearchLocation }) => {
  //State
  const [search, setSearch] = useState("");

  //Functions
  const handleChange = ({ value }) => {
    setSearch(value);
    if (inputSearchRef.current.textContent) {
      inputSearchRef.current.classList.remove("hidden");
    } else {
      inputSearchRef.current.classList.add("hidden");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    handleSearchLocation(search);

    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex search-form">
      <div className="w-3/4 relative flex">
        <input
          className="border w-full input-search p-3 sm:p-4"
          type="text"
          placeholder="Search location"
          value={search}
          onChange={({ target }) => handleChange(target)}
        />

        <div
          className="absolute bottom-0 border w-full select-search hidden max-h-72 overflow-y-visible"
          ref={inputSearchRef}
        >
          {search.length >= 2
            ? locationList.map((planeta) =>
                planeta.toLowerCase().includes(search.toLowerCase()) ? (
                  <option
                    className="cursor-pointer p-3 border-b border-gray-600"
                    onClick={(e) => {
                      setSearch(planeta);
                      inputSearchRef.current.classList.add("hidden");
                    }}
                    key={planeta}
                  >
                    {planeta}
                  </option>
                ) : null
              )
            : null}
        </div>
      </div>
      <input className="w-1/4 input-submit p-3" type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
