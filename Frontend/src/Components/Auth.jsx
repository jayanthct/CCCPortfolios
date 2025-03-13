import { useState, useEffect } from "react";
import { auth, googleProvider } from "../auth/firebase";
import {
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import google from "../assets/google.svg";

import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

const Auth = () => {


  const {setLoggedin,handleLogin} = useAuth();
  
  const [user, setUser] = useState(null);
  const [error, setError] = useState(""); // Handle errors

  useEffect(() => {
    // Check if user is already logged in (persists across refresh)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setLoggedin(true);
      }
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logout Successfully");
      setLoggedin(false);
    } catch (error) {
      toast.error("Error in Logout. Please Try Again");
    }
  };
  

  const getAvatarUrl = (name) => {
    return `https://avatar.iran.liara.run/username?username=${name}`;
  };

  return (
    <>
      {user ? (
        <div className="text-center flex justify-center items-center gap-4">
          <img
            className="w-12 h-12 rounded-full mx-auto shadow-lg"
            src={getAvatarUrl(user.displayName)}
            alt="User"
          />
          <h2 className="text-xl font-semibold text-[#494623]">
            {user.displayName.split(" ")[0]}
          </h2>
          <button
            onClick={handleLogout}
            className="bg-[#494623] text-white font-bold hover:scale-[0.9] transition-all ease-in duration-200 gap-2 flex justify-center items-center cursor-pointer hover:bg-[#2c2a1a] w-fit px-4 h-[52px] rounded-full"
          >
            <img src={google} alt="Google" className="w-6" />
            LogOut
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="bg-[#494623] hover:scale-[0.9] transition-all ease-in duration-200 text-white font-bold gap-2 flex justify-center items-center cursor-pointer hover:bg-[#2c2a1a] w-fit px-4 h-[52px] rounded-full"
          >
            <img src={google} alt="Google" className="w-6" />
            Login with Google
          </button>
        </>
      )}
    </>
  );
};

export default Auth;
