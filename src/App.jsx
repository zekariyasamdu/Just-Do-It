// routers
import AppRouter from "./routes/AppRouter";
// context
import { LoginContext } from "./Context/LoginContext";
import { DataBaseUpdatedContext } from "./Context/DataBaseUpdatedContext";
import { MessageContext } from "./Context/messageContext";


export default function App() {

  return (

    <MessageContext>
      < DataBaseUpdatedContext>
        <LoginContext>
          <AppRouter />
        </LoginContext>
      </DataBaseUpdatedContext>
    </MessageContext>

  )
}


