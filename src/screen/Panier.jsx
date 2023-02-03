import TitlePanier from "../components/TitlePanier";
import PanierSelection from "../components/PanierSelection";
import TotalSelection from "../components/TotalSelection";
import { useState, useEffect } from "react";

const Panier = () => {
  const [panierStorage, setPanierStorage] = useState([]);
  const [panierTotal, setPanierTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));

    if (items) {
      setPanierStorage(items);
    }
  }, []);

  useEffect(() => {
    setPanierTotal(
      panierStorage.map((e) => e.price).reduce((a, b) => a + b, 0)
    );
  }, [panierStorage]);

  useEffect(() => {
    document.body.classList.add("panier-layout");
    return () => {
      document.body.classList.remove("panier-layout");
    };
  }, []);

  return (
    <div className="globalpanier">
      <TitlePanier />
      <PanierSelection />
      <TotalSelection />
    </div>
  );
};

export default Panier;
