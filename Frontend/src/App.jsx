import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
