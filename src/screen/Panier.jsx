import PanierSelection from "../components/PanierSelection";
import TotalSelection from "../components/TotalSelection";
import Header2 from "../components/Header2";
import { useState, useEffect } from "react";

const Panier = () => {
  const [panierStorage, setPanierStorage] = useState([]);
  const [panierTotal, setPanierTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartRat"));

    if (items) {
      setPanierStorage(items);
    }
  }, []);

  useEffect(() => {
    setPanierTotal(panierStorage.map((e) => e.prix).reduce((a, b) => a + b, 0));
  }, [panierStorage]);

  useEffect(() => {
    document.body.classList.add("panier-layout");
    return () => {
      document.body.classList.remove("panier-layout");
    };
  }, []);

  return (
    <>
      <div className="globalpanier">
        <Header2 />
        <PanierSelection panier={panierStorage} setPanier={setPanierStorage} />
        <TotalSelection total={panierTotal} />
      </div>
    </>
  );
};

export default Panier;
