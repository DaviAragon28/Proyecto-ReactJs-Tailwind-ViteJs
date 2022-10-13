import React, { useState } from "react";

const DarkModeContext = React.createContext({})

const DarkModeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return (
        <DarkModeContext.Provider value={{dark, setDark}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider}