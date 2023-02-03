import { Link } from "react-router-dom";
import { useState } from "react";
import ModalPaiement from "./ModalPaiement";

const TotalSelection = () => {
  const [openModal, setOpenModal] = useState(false);

  //   const deleteOnCart = (i) => {
  //     const panierTemp = [...panier];
  //     panierTemp.splice(i, 1);
  //     setPanier(panierTemp);
  //     localStorage.setItem("cart", JSON.stringify(panierTemp));
  //   };
  return (
    <>
      <div className="totalpanier-container">
        <div className="panier-description">
          <h2 className="title-totalpanier">VOTRE PANIER</h2>
          <ul className="">
            {/* {panier.map((vilain, i) => (
                <li key={i}>
                {rat.pseudo}{rat.price}€
                  <button
                    className="buttonDelete"
                    onClick={() => deleteOnCart(i)}
                  >
                    Delete
                  </button>
                </li>
              ))} */}
          </ul>
          <p className="totalpanier">TOTAL{/* {total} */} €</p>
        </div>
        <div className="btn-totalcontainer">
          <button
            className="btn-totalpanier"
            href="#"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            {" "}
            VALIDER MA COMMANDE{" "}
          </button>
          <Link to="/catalogue">
            <button className="btn-cancelpanier">ANNULER MA COMMANDE</button>
          </Link>
        </div>
      </div>

      {openModal && <ModalPaiement closeModal={setOpenModal} />}
    </>
  );
};

export default TotalSelection;
