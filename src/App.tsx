import { useState } from "react";
import WelcomePage from "./components/welcome-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WelcomePage name="Kevin Terry [Software Engineer]" />
    </div>
  );
}

export default App;
