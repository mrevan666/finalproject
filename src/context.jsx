import { useState } from "react";
import { createContext } from "react";

const AppContext = createContext()

const Context = ({ children }) => {
    const [state,setState] = useState()
    return (
        <AppContext.Provider>
            { children }
        </AppContext.Provider>
    )
}


export default Context 