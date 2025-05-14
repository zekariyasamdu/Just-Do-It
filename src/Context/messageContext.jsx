import { createContext, useState } from "react";

const messageContext = createContext();

function MessageContext({children}){
    const [message, setMessage] = useState(false); 
    
    return(
        <messageContext.Provider value={[message, setMessage]}>
            {children}
        </messageContext.Provider>
    )
}
export { messageContext, MessageContext};
