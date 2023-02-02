
const Filter = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setResult(
      props.rats.filter(
        (rat) =>
          (rat.vitesse === parseInt(props.vitesseValue) ||
            0 === parseInt(props.vitesseValue)) &&
          (rat.menace === parseInt(props.menaceValue) ||
            0 === parseInt(props.menaceValue)) &&
          (rat.contagion === parseInt(props.contagionValue) ||
            0 === parseInt(props.contagionValue)) 
      )
    );
  };
    return (
      <div className="filter-container">
      <form onSubmit={handleSubmit}>

      <label for ="vitesse">Vitesse</label>
        <select
          name="vitesse"
          onChange={(e) => props.setVitesseValue(e.target.value)}
        >
          <option value="0">---</option>
          {props.vitesseTexte[0]
            ? props.vitesseTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.vitesseTexte}
                </option>
              ))
            : null}
        </select>
        <label for ="menace">Menace</label>
        <select name="menace" onChange={(e) => props.setMenaceValue(e.target.value)}>
          <option value="0">---</option>
          {props.menaceTexte[0]
            ? props.menaceTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.menaceTexte}
                </option>
              ))
            : null}
        </select>
        <label for ="contagion">Contagion</label>
        <select
          name="contagion"
          onChange={(e) => props.setContagionValue(e.target.value)}
        >
          <option value="0">---</option>
          {props.contagionTexte[0]
            ? props.contagionTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.contagionTexte}
                </option>
              ))
            : null}
        </select>
        <button>Rechercher</button>
      </form>
  
      
          </div>
        
    )
}
export default Filter