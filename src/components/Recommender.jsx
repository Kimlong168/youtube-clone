import { useState } from "react";

const Recommender = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  function moveBack() {
    const recommend = document.querySelector(".recommend");
    recommend.style.scrollBehavior = "smooth";
    recommend.scrollLeft -= 200;
  }

  function moveForward() {
    const recommend = document.querySelector(".recommend");
    recommend.style.scrollBehavior = "smooth";
    recommend.scrollLeft += 200;
  }

  const recommender = [
    "All",
    "Trending",
    "Top Rated",
    "Action",
    "Comedy",
    "Horror",
    "Romance",
    "Mystery",
    "Sci-Fi",
    "Western",
    "Animation",
    "Movie",
    "TV Series",
    "Funny",
    "Comedy",
    "Horror",
    "Romance",
    "Mystery",
    "Sci-Fi",
  ];
  return (
    <div className=" ml-5 md:ml-24 mt-3 pb-2 relative">
      <div className="flex gap-3 overflow-x-auto recommend pr-4 ">
        {recommender.map((item, index) => {
          return (
            <div
              key={index}
              className={` whitespace-nowrap px-2 py-1.5 rounded-md cursor-pointer break-keep hover:bg-gray-500 ${
                index !== 0
                  ? "bg-gray-700 text-white"
                  : "bg-white text-black hover:text-white"
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>whitespace-nowrap px-2 py-1.5 rounded-md cursor-pointer break-keep
      {showLeft && (
        <div className="absolute left-0 top-0  p-0.5 hidden lg:block">
          <button
            className="mr-auto p-1 grid place-items-center w-8 h-8 rounded-full bg-gray-900"
            onClick={moveBack}
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
      {showRight && (
        <div
          className="absolute right-0 top-0  p-0.5 hidden lg:block left"
          onClick={() => setShowLeft(true)}
        >
          <button
            className="ml-auto p-1 grid place-items-center w-8 h-8 rounded-full bg-gray-900"
            onClick={moveForward}
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Recommender;
