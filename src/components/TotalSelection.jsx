import { Link } from "react-router-dom";
import { useState } from "react";
import ModalPaiement from "./ModalPaiement";

const TotalSelection = ({ total }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="totalpanier-container">
        <div className="panier-description">
          <h2 className="title-totalpanier">TOTAL</h2>

          <p className="totalpanier">DE VOTRE COMMANDE </p>
          <p className="totalpanier">{total} écus d'or</p>
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
