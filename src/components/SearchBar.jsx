import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  function handleOnFucus() {
    setIsFocus(true);
  }

  function handleOnchange(e) {
    setSearchValue(e.target.value);
    if (e.target.value != "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  const border = isFocus ? "border-blue-500" : "border-gray-500";
  return (
    <div className="flex justify-center items-center gap-4 w-full">
      <div className="flex  items-center w-full">
        <div
          className={`flex items-center gap-2 px-3 text-white border ${border} rounded-l-full w-full`}
        >
          {isFocus && (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          )}
          <input
            type="text"
            placeholder="Search"
            className="outline-0 border-0 bg-transparent w-full md:w-[210px] lg:w-[400px] xl:w-[500px] px-4 py-2"
            onFocus={handleOnFucus}
            value={searchValue}
            onChange={handleOnchange}
          />

          <div
            className={`cursor-pointer ${isEmpty ? "invisible " : "visible"}`}
            onClick={() => {
              setSearchValue("");
              setIsEmpty(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <button className="tooltip-parent px-4 py-2 rounded-r-full border border-gray-500 border-l-0 text-white bg-gray-800 relative" onClick={() => setIsFocus(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <div className="z-[20] bg-gray-800 text-white px-2 py-1 rounded-md absolute bottom-[-55px] right-[50%] translate-x-1/2 opacity-80 text-center tooltip">
            Search
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
