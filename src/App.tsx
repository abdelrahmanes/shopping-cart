import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { About } from "./Pages/About";
import { Navbar } from "./Components/Navbar";
import { Cart } from "./Components/Cart";
function App() {
  return (
    <>
      <Navbar />
      <div className="font-inter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
