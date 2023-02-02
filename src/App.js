import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Panier from "./screen/Panier";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
