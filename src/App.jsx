import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recommender from "./components/Recommender";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import SmallSidebar from "./components/SmallSidebar";
import VideoContainer from "./components/VideoContainer";
import SideBar from "./components/SideBar";
import SuccessAlert from "./components/SuccessAlert";
function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  function handleSignIn() {
    setIsSignIn((prev) => !prev);
    // document.body.style.overflow = !isSignIn ? "hidden" : "auto";
  }

  function handleSignUp() {
    setIsSignUp((prev) => !prev);
    // document.body.style.overflow = isSignUp ? "hidden" : "auto";
  }

  function handleShowSideBar() {
    setShowSideBar((prev) => !prev);
    document.body.style.overflow = !showSideBar ? "hidden" : "auto";
    // document.getElementById('vdo-container').style.opacity = !showSideBar ? "0.5" : "1";
  }

  return (
    <div className={`text-white`}>
      <div className="fixed left-0 right-0 blackBg z-[10]">
        <Header
          handleSignIn={handleSignIn}
          handleShowSideBar={handleShowSideBar}
        />
        <SmallSidebar />
        <Recommender />
      </div>
      {showSideBar && (
        <SideBar
          handleSignIn={handleSignIn}
          handleShowSideBar={handleShowSideBar}
        />
      )}
      <VideoContainer handleShowSideBar={setShowSideBar} />

      {isSignIn && (
        <SignInForm
          handleSignUp={handleSignUp}
          handleSignIn={handleSignIn}
          setSuccess={setSuccess}
        />
      )}
      {isSignUp && (
        <SignUpForm
          handleSignUp={handleSignUp}
          handleSignIn={handleSignIn}
          setSuccess={setSuccess}
        />
      )}
      {isSuccess && <SuccessAlert setSuccess={setSuccess} />}
    </div>
  );
}

export default App;
