import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

export function UserProvider({children}) {
    const [userList, setUserList] = useState([]);

    return (
        <UserContext.Provider value={{userList, setUserList}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}