import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homecard from "./HomeCard/Homecard";
import Header1 from "./Layout/header";
import Footer from "./Layout/footer";
import Index from "./Comp/index";
import Button1 from "./Comp/button1";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen">
        <Header1 />
        <Routes>
          <Route path="/" element={<Homecard />} />
          <Route path="/buttons" element={<Index />} />
          <Route path="/button1" element={<Button1 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
