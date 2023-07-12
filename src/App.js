import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Homecard from "./HomeCard/Homecard";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen">
        <Homecard />
      </div>
    </BrowserRouter>
  );
}

export default App;
