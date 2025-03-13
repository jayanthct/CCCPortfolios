import React from "react";
import login from "../assets/LoginIllustration.svg"

function LoginToShow() {
  return (
    <>
      <section className="bg-[rgb(247,245,233)] p-4 h-full w-full flex flex-col justify-center items-center gap-8">
        <h1 className="text text-[#494623] font-semibold text-[32px]">Please Login To see Portfolios</h1>
        <img src={login} alt="" className="illustration w-[50%]" />
      </section>
    </>
  );
}

export default LoginToShow;
