import { useState } from "react";
import "./App.css";

function App() {
  //state (etate , donnees)
  const [fruite, setFruite] = useState([
    { id: 1, nom: "banane" },
    { id: 2, nom: "fraise" },
    { id: 3, nom: "pomme" },
  ]);

  //comportement
  const handledelete = (id : number) => {
    console.log(id);
    //copier le state
    const copieFruite = [...fruite];
    //manipuler le state
    const copieFruiteUpdate = copieFruite.filter((fruits) => fruits.id !== id);
    //modifier
    setFruite(copieFruiteUpdate);
  };
  //Affichage
  return (
    <div>
      <h2>Listes des fruites</h2>
      <ul>
        {fruite.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}
            <button onClick={() => handledelete(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
