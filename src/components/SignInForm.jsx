import googleLogo from "../assets/googleLogo.png";
import { useState } from "react";
const SignInForm = ({ handleSignUp, handleSignIn, setSuccess }) => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(" ");

  function handleEmail(e) {
    setEmail(e.target.value);
    if (!e.target.value.includes("@") || !e.target.value.includes(".com")) {
      setMsg("Your email is invalid");
    } else {
      setMsg("");
    }
  }
  return (
    <div className="fixed inset-0 backdrop-blur-sm  z-[30]">
      <div className="px-10 py-10 mt-14 rounded-md text-black border border-gray-300 bg-white flex flex-col items-center md:w-[450px] md:h-[500px] mx-4 md:mx-auto">
        <div className="text-center ">
          <div className="w-[120px] mx-auto mb-4">
            <img src={googleLogo} alt="google_logo" />
          </div>
          <h2 className="font-semibold text-2xl mb-3">Sign in</h2>
          <p>To continue to my heart</p>
        </div>
        <div className="w-full mt-12">
          <input
            type="email"
            className="p-3 rounded-sm border border-gray-300 outline-none w-full"
            placeholder="Email or Phone"
            onChange={handleEmail}
            value={email}
          />
          <div>
            <a href="#" className="text-blue-600 text-sm">
              Forget your heart password?
            </a>
          </div>
        </div>

        <small className="w-full text-xs mt-1 text-red-600 h-2">{msg}</small>

        <div className="w-full mt-10 text-sm">
          <p>Not your computer? Use Guest mode to sign in privately.</p>
          <div>
            <a href="#" className="text-blue-600">
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <div
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              handleSignUp();
              handleSignIn();
            }}
          >
            Create account
          </div>
          <button
              onClick={() => {
                handleSignIn();
                setSuccess(true);
              }}
            className="bg-blue-600 rounded-md text-white font-bold px-5 py-1.5 hover:bg-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
