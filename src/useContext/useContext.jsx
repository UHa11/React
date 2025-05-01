import React, { createContext, useState } from 'react';

const useContext = createContext();

export function UserProvider({ children }) {
  const [userList, setUserList] = useState([]);

  return <useContext.Provider value={{ userList, setUserList }}>{children}</useContext.Provider>;
}

export function useUser() {
  return useContext(useContext);
}
