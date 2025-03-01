import React from "react";
import logo from "../assets/logo.png";
import Auth from "./auth";

function Navbar() {
  return (
    <>
      <nav className="navbar flex justify-between px-[10%] py-[2%] items-center bg-[#49462326]">
        <img src={logo} alt="" className="image md:w-[200px] w-[100px]" />
        <Auth></Auth>
      </nav>
    </>
  );
}

export default Navbar;
