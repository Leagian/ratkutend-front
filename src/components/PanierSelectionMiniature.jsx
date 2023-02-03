const PanierSelectionMiniature = ({ rat, panier, setPanier, key }) => {
  const deleteOnCart = (i) => {
    const panierTemp = [...panier];
    panierTemp.splice(i, 1);
    setPanier(panierTemp);
    localStorage.setItem("cartRat", JSON.stringify(panierTemp));
  };
  return (
    <li className="selectionMiniature">
      <div className="text">
        <img src={rat.image} alt={rat.name} />
        <h3>{rat.name}</h3>
        <h4>{rat.prix} écus d'or</h4>
      </div>
      <button onClick={() => deleteOnCart(key)}>Supprimer</button>
    </li>
  );
};

export default PanierSelectionMiniature;
