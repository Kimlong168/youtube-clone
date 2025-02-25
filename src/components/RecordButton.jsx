

const RecordButton = () => {
  return (
    <div className="relative tooltip-parent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 md:w-10 md:h-10 p-2 rounded-full bg-gray-800  hover:bg-gray-700 cursor-pointer text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
      <div className="z-[20] bg-gray-800 tooltip text-white px-2 py-1 rounded-md absolute bottom-[-55px] right-[50%] translate-x-1/2 opacity-80 w-[190px] text-center d-none">
        Search with your voice
      </div>
    </div>
  );
};

export default RecordButton;
