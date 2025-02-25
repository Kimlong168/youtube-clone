import { useState } from "react";
import googleLogo from "../assets/googleLogo.png";
import InputPassword from "./InputPassword";
const SignUpForm = ({ handleSignUp, handleSignIn,setSuccess }) => {
  const [msg, setMsg] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [openEyes, setOpenEyes] = useState(false);

  function handleInputValue(e) {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email" && (!value.includes("@") || !value.includes(".com"))) {
      setMsg("Your email is invalid");
    } else if (name === "password" && value.length < 8) {
      setMsg("Your password must be at least 8 characters");
    } else if (name === "confirmPassword" && inputValue.password !== value) {
      setMsg("Your password is not match");
    } else {
      setMsg("");
    }
  }


  

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-[30]">
      <div className="px-10  py-10 md:py-0 mt-14 rounded-md text-black border border-gray-300 bg-white flex flex-col items-center md:w-[450px] md:h-[500px] mx-4 md:mx-auto">
        <div className="text-center ">
          {/* <div className="w-[120px] mx-auto mb-4">
            <img src={googleLogo} alt="google_logo" />
          </div> */}

          {openEyes ? (
            <div style={{ fontSize: "70px" }}>&#128528;</div>
          ) : (
            <div style={{ fontSize: "70px" }}>&#128526;</div>
          )}

          <h2 className="font-semibold text-2xl mb-3">Sign up</h2>
          <p>To continue to my heart</p>
        </div>
        <div className="w-full mt-8 flex flex-col gap-3">
          <input
            type="email"
            className="p-3 rounded-sm border border-gray-300 outline-none w-full"
            placeholder="Email or Phone"
            name="email"
            value={inputValue.email}
            onChange={handleInputValue}
          />
          <InputPassword
            inputValue={inputValue.password}
            handleInputValue={handleInputValue}
            name="password"
            setOpenEyes={setOpenEyes}
          />
          <InputPassword
            inputValue={inputValue.confirmPassword}
            handleInputValue={handleInputValue}
            name="confirmPassword"
            setOpenEyes={setOpenEyes}
          />
        </div>
        <small className="w-full text-xs mt-1 text-red-600 h-2">{msg}</small>
        <div className="flex justify-between items-center w-full mt-10">
          <div
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              handleSignUp();
              handleSignIn();
            }}
          >
            Have an account?
          </div>
          <button
            onClick={() => {
              handleSignUp();
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

export default SignUpForm;
