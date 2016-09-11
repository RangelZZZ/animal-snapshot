'use strict';


function buildAnimalLocations(snapshotArray){

    const locations = getAnimalLocation(snapshotArray);

    return  buildAccurateLocation(locations);
}

function getAnimalLocation(snapshotArray){

      return  snapshotArray.map((location) => {

         const animals = location.allAnimals;
         const timeId = location.timeId;
         const time = location.time;

         const allAnimals = animals.map((animal) => {

             const animalArray = animal.split(' ');
             const animalObject = {animalId:'',location:''};

             animalObject.animalId  = animalArray[0];
             animalObject.location = animalArray.length === 3 ? `${animalArray[1]} ${animalArray[2]} 0 0`: `${animalArray[1]} ${animalArray[2]} ${animalArray[3]} ${animalArray[4]}`;

             return animalObject;
         });
          return {timeId, time, allAnimals};
     });
}


function buildAccurateLocation(animalLocation){

    const newAnimalLocations = [animalLocation[0]];

    for(let i = 1; i < animalLocation.length; i++){

        const timeId = animalLocation[i].timeId;
        const time = animalLocation[i].time;

        const animals = animalLocation[i].allAnimals;
        const preAnimals = animalLocation[i-1].allAnimals;

         for(let preAnimal of preAnimals){
          const notExistAnimal = isExist(preAnimal,animals);

           if(notExistAnimal){
              animals.push(notExistAnimal);
            }
         }
         newAnimalLocations.push({timeId, time, allAnimals:animals});
    }

    return newAnimalLocations;
}

function isExist(preAnimal,animals){

    for(let animal of animals){
        if(animal.animalId !== preAnimal.animalId){

            return preAnimal;
        }else{
            return false;
        }
    }
}

module.exports = {
    getAnimalLocation:getAnimalLocation,
    buildAccurateLocation:buildAccurateLocation,
    buildAnimalLocations:buildAnimalLocations
};

