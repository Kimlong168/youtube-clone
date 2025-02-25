
const SearchButton = ({ handleShowBigBar }) => {
  return (
    <div className="relative group searchSmBtn tooltip-parent" onClick={handleShowBigBar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 p-2 rounded-full  hover:bg-gray-700 cursor-pointer text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <div className="bg-gray-800 tooltip text-white px-2 py-1 rounded-md absolute bottom-[-55px] right-[50%] translate-x-1/2 opacity-80 w-[80px] text-center d-none">
        Search
      </div>
    </div>
  );
};

export default SearchButton;
