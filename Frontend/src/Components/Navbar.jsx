import React from "react";
import logo from "../assets/logo.png";
import ccc from "../assets/ccc.png";
import close from "../assets/close.svg";
import Auth from "./auth";

function Navbar() {
  return (
    <>
      <nav className="navbar flex justify-between px-[10%] py-[2%] items-center bg-[#49462342]">
        <div className="logos flex justify-center items-center gap-4">
          <a href="/">
            <img src={logo} alt="" className="image md:w-[200px] w-[150px]" />
          </a>
            <img src={close} alt="" className="image w-[30px] h-[30px] md:w-[42px] md:h-[42px]" />
          <a href="/">
            <img src={ccc} alt="" className="image md:w-[120px] w-[100px]" />
          </a>
        </div>
        <Auth></Auth>
      </nav>
    </>
  );
}

export default Navbar;
