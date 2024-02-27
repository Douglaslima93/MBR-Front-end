import { createContext, useState } from "react";
import React from "react";

export const UserNameContext = createContext({});

export function UserNameProvider({children}) {
    const [name, setName] = useState('')

    function handleSetname(name) {
        setName(name)
    }

    return (
        <UserNameContext.Provider value={[name, handleSetname]}>
            {children}
        </UserNameContext.Provider>
    )
}