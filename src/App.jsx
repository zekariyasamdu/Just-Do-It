import {LoginContext} from "./Context/LoginContext";
import AppRouter from "./routes/AppRouter";


export default  function App() {

  return (
    <LoginContext>
      <AppRouter/>
    </LoginContext>
  )
}


