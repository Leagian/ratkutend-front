import { Link } from "react-router-dom";

const ModalPaiement = ({ closeModal }) => {
  return (
    <div className="modalpay-container">
      <div className="modalPaiement">
        <h2 className="modaltitle">Remplissez vos informations</h2>
        <form className="description">
          <div className="descmodal">
            <input type="text" name="name" placeholder=" Nom sur la carte" />
          </div>
          <br />
          <div className="descmodal">
            <input type="text" name="name" placeholder=" N° de carte" />
          </div>
          <br />
          <div className="descmodal">
            <input type="text" name="name" placeholder=" Date d'expiration" />
          </div>
          <br />
          <div className="descmodal">
            <input type="text" name="name" placeholder=" Cryptogramme visuel" />
          </div>
          <br />
          <Link to="#">
            <button
              className="button-paiement"
              onClick={() => closeModal(false)}
            >
              PAYEZ 🐀
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default ModalPaiement;
