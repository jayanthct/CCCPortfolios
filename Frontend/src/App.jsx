import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Main></Main>
    </>
  );
}

export default App;
