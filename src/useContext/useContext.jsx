import React, { createContext, useState } from 'react';

const useContext = createContext();

export function UserProvider({ children }) {
  const [userList, setUserList] = useState([]);

  return <UserContext.Provider value={{ userList, setUserList }}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(useContext);
}
