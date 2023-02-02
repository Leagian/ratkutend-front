import { Routes, Route } from "react-router-dom";
import Catalogue from "./screen/Catalogue";
import Home from "./screen/Home";
function App() {
  return (
    <>
      <div className="App">
      
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
