const RatsCard = (props) => {
  return (
    <div className="ratsCard-container">
      <div className="ratsCard-body">
        <div className="rats-front">
          <img className="rats-img" src={props.image} alt={props.name} />
          <h3 className="ratsCard-name">{props.name}</h3>
          <h5 className="ratsCard-prix">{props.prix}</h5>
        </div>
        <div className="ratsCard-back">
          <p className="ratsCard-desc">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RatsCard;
