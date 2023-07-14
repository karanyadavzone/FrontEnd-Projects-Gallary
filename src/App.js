import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Homecard from "./HomeCard/Homecard"; 
import Header1 from "./Fix-Comp/HeaderTabs";
 
function App() {
  return ( 
    <BrowserRouter>
      <div className="App h-screen">
        <Header1/>
        <Homecard />
      </div>
    </BrowserRouter>
  );
} 

export default App;
