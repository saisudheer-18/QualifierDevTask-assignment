import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="h-full flex flex-col justify-end bg-[#f7f8f9]  px-6 pb-12">

      <h1 className="text-[28px] font-semibold text-[#1D2226] mb-1">
        Welcome to PopX
      </h1>

      <p className="text-gray-500 text-[18px] leading-6 mb-8">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <button
        className="w-full h-[46px] bg-[#6C25FF] text-white rounded-[6px] text-[15px] font-medium mb-3"
        onClick={handleSignUp} >
        Create Account
      </button>

      <button
        className="w-full h-[46px] bg-[#CEBAFB] text-[#1D2226] rounded-[6px] text-[15px] font-semibold"
        onClick={handleLogin} >
        Already Registered? Login
      </button>

    </div>
  );
};

export default Home;