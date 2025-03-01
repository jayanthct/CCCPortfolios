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

const Auth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(""); // Handle errors

  useEffect(() => {
    // Check if user is already logged in (persists across refresh)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  const handleLogin = async () => {
    try {
      // Set session persistence to keep user logged in for 1 day
      await setPersistence(auth, browserLocalPersistence);

      // Sign in user
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email;

      if (email.endsWith("@srmap.edu.in")) {
        setUser(result.user);
        setError(""); // Clear previous errors
      } else {
        setError("Access Denied: Only @srmap.edu.in accounts can sign in.");
        await signOut(auth); // Log them out immediately
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {user ? (
        <div className="text-center flex justify-center items-center gap-4">
          <img
            className="w-12 h-12 rounded-full mx-auto shadow-lg"
            src={user.photoURL}
            alt="User"
          />
          <h2 className="text-xl font-semibold text-[#494623]">
            {user.displayName.split(" ")[0]}
          </h2>
          <button
            onClick={handleLogout}
            className="bg-[#494623] text-white font-bold gap-2 flex justify-center items-center cursor-pointer hover:bg-[#2c2a1a] w-[120px] h-[52px] rounded-full"
          >
            <img src={google} alt="Google" className="w-6" />
            LogOut
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="bg-[#494623] text-white font-bold gap-2 flex justify-center items-center cursor-pointer hover:bg-[#2c2a1a] w-[120px] h-[52px] rounded-full"
          >
            <img src={google} alt="Google" className="w-6" />
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
        </>
      )}
    </>
  );
};

export default Auth;
