import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import GeneralRouter from "./pages/generalRouter";
import FloatingMessage from "./components/floatingMessage";
import { GeneralProvider } from "./contexts/generalContext";

const App = () => (
  <div>
    <GeneralProvider>
      <GeneralRouter />
      <FloatingMessage />
    </GeneralProvider>
  </div>
)

export default App
