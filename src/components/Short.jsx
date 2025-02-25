import ShortVdoCard from "./ShortVdoCard";
const Short = () => {
  return (
    <div>
      <div className="w-full h-1 bg-gray-600  my-10"></div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
        <span className="text-2xl">Shorts</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 grid-rows-1 overflow-hidden gap-3 mt-5 place-items-center">
        <ShortVdoCard />
        <ShortVdoCard />
        <ShortVdoCard />
        <ShortVdoCard />
        <ShortVdoCard />
      </div>
    </div>
  );
};

export default Short;
