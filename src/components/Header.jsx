import { useState } from "react";
import logo from "../assets/youtube-logo.png";
import SearchBar from "./SearchBar";
import RecordButton from "./RecordButton";
import SearchButton from "./SearchButton";
import SignInBtn from "./SignInBtn";
const Header = ({ handleSignIn, handleShowSideBar }) => {
  const [showBigSearchBar, setShowBigSearchBar] = useState(false);

  function handleShowBigBar() {
    setShowBigSearchBar(true);
  }
  return (
    <>
      {showBigSearchBar ? (
        <div className="p-3 flex justify-center gap-3">
          <button
            onClick={() => setShowBigSearchBar(false)}
            className="text-white"
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
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <SearchBar />
        </div>
      ) : (
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center md:gap-4">
            <svg
              onClick={handleShowSideBar}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 md:w-10 md:h-10  text-white hover:bg-gray-700 cursor-pointer rounded-full p-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <div title="Youtube Home">
              <img src={logo} alt="logo" className="h-10" />
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 md:gap-8 lg:gap-20 xl:gap-32">
            <div className="flex items-center gap-1 md:gap-3">
              <div className="hidden md:block ">
                <SearchBar />
              </div>
              <div className="block md:hidden">
                <SearchButton handleShowBigBar={handleShowBigBar} />
              </div>
              <RecordButton />
            </div>

            <div className="flex justify-end items-center gap-1 md:gap-4">
              <div className="tooltip-parent relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                <div className="bg-gray-800 tooltip text-white px-2 py-1 rounded-md absolute bottom-[-55px] right-[50%] translate-x-1/2 opacity-80 w-[80px] text-center z-[20]">
                  Setting
                </div>
              </div>
              <SignInBtn handleSignIn={handleSignIn} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
