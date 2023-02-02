import axios from "axios";
import { useState, useEffect } from "react";
const Filter = () => {
  const [rats, setRats] = useState([]);
  const [vitesseTexte, setVitesseTexte] = useState([]);
  const [menaceTexte, setMenaceTexte] = useState([]);
  const [contagionTexte, setContagionTexte] = useState([]);
  const [vitesseValue, setVitesseValue] = useState(0);
  const [menaceValue, setMenaceValue] = useState(0);
  const [contagionValue, setContagionValue] = useState(0);
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4242/rats")
      .then((res) => res.data)
      .then((data) => {
        setRats(data);
        setResult(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4242/vitesse")
      .then((res) => res.data)
      .then((data) => {
        setVitesseTexte(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4242/menace")
      .then((res) => res.data)
      .then((data) => {
        setMenaceTexte(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4242/contagion")
      .then((res) => res.data)
      .then((data) => {
        setContagionTexte(data);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(
      rats.filter(
        (rat) =>
          (rat.vitesse === parseInt(vitesseValue) ||
            0 === parseInt(vitesseValue)) &&
          (rat.menace === parseInt(menaceValue) ||
            0 === parseInt(menaceValue)) &&
          (rat.contagion === parseInt(contagionValue) ||
            0 === parseInt(contagionValue))
      )
    );
  };
    return (
      <div className="filter-container">
      <form onSubmit={handleSubmit}>
        <select
          name="vitesse"
          onChange={(e) => setVitesseValue(e.target.value)}
        >
          <option value="0">Vitesse</option>
          {vitesseTexte[0]
            ? vitesseTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.vitesseTexte}
                </option>
              ))
            : null}
        </select>
        <select name="Menace" onChange={(e) => setMenaceValue(e.target.value)}>
          <option value="0">Menace</option>
          {menaceTexte[0]
            ? menaceTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.menaceTexte}
                </option>
              ))
            : null}
        </select>
        <select
          name="Contagion"
          onChange={(e) => setContagionValue(e.target.value)}
        >
          <option value="0">Contagion</option>
          {contagionTexte[0]
            ? contagionTexte.map((text, i) => (
                <option value={i + 1} key={i}>
                  {text.contagionTexte}
                </option>
              ))
            : null}
        </select>
        <button>Rechercher</button>
      </form>
      {result.map((rat) => (
        <h1>{rat.name}</h1>
      ))}
          </div>
        
    )
}
export default Filter