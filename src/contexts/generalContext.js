import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {

    const [autenticado, setAutenticado] = useState(false);
    const [user, setUser] = useState('');

    return (
        <GeneralContext.Provider value={{
            autenticado, setAutenticado,
            user, setUser
        }}>
            { children}
        </GeneralContext.Provider>
    )
}