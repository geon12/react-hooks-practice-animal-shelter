import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  
  function onChangeType(e) {
    setFilters({...filters,type: e.target.value })
  }

  function onFindPetsClick() {
    let optionalParamter = filters.type
    if (optionalParamter === "all") {
        optionalParamter = ''
    } else {
      optionalParamter = '?type=' + optionalParamter
    }
    fetch(`http://localhost:3001/pets${optionalParamter}`)
      .then(resp => resp.json())
      .then(setPets)
  }

  function onAdoptPet(id){
    const shelterPets = pets.map((pet) =>{
      if (pet.id === id) return {...pet,isAdopted: true}
      return pet
    })
    setPets(shelterPets)
    
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
