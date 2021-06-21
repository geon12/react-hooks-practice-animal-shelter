import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  function populatePets() {
    return pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>)
  }
  return <div className="ui cards">{populatePets()}</div>;
}

export default PetBrowser;
