import React, { createContext, useState, useContext } from "react";
import { auth, googleProvider } from "../auth/firebase";
import {
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedin, setLoggedin] = useState(false);

  // Login function
  const handleLogin = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email;

      if (email.endsWith("@srmap.edu.in")) {
        setLoggedin(true);
        toast.success("Login Successfully!");
      } else {
        toast.error("Access Denied: Only @srmap.edu.in accounts can sign in");
        await signOut(auth);
        setLoggedin(false);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedin, setLoggedin, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
