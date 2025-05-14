import { createContext, useState } from "react";
 const dataBaseUpdatedContext = createContext()


function DataBaseUpdatedContext({children}) {
    const [change, setChange] = useState(0)
    return (
        <dataBaseUpdatedContext.Provider value={[change, setChange]}>
            {children}
        </dataBaseUpdatedContext.Provider>

    )
}

export {DataBaseUpdatedContext, dataBaseUpdatedContext}

