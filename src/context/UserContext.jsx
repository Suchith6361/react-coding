import React, { useState, createContext } from "react";

export const MyContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Suchith");

  return (
    <MyContext.Provider value={{ user }}>
      {children}
    </MyContext.Provider>
  );
};


