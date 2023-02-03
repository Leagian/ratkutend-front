import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Panier from "./screen/Panier";

import PanierSelection from "./components/PanierSelection";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/panierSelection" element={<PanierSelection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
