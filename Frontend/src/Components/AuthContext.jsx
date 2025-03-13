import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedin, setLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
