import { Routes, Route } from "react-router-dom";
import Catalogue from "./screen/Catalogue";
import Home from "./screen/Home";
import Panier from "./screen/Panier";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panier" element={<Panier />} />

          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
