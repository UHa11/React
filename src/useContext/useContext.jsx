import React, { createContext, useState } from 'react';

const useContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  return <useContext.Provider value={{ user, setUser }}>{children}</useContext.Provider>;
}

export function useUser() {
  return useContext(useContext);
}
