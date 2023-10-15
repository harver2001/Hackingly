import React from "react";
import { Link } from "react-router-dom";
import four from "../../assets/logos/four.png";
const RegisterPageNavBar = () => {
  return (
    <div className="h-16 flex justify-between py-5 px-40 bg-white">
      <Link to={"/"}>
        <img
          className="w-28 h-28 mt-[-40px]"
          src={four}
          alt="hero-img"
        />
      </Link>

      <div className="flex space-x-4">
        <div className="font-semibold">
          <Link to={"/blogs"}>Blogs</Link>
        </div>
        <Link to={"/login"}>
          <div className="w-24 h-8 text-white mt-[-3px] rounded-md bg-[#5161E9] flex justify-center items-center transition-transform transform active:scale-95">
            <div>Login</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPageNavBar;
