'use strict';

function printAnimalSnapShot(animalSnapshot,id) {

    let outputString = '';

    for(let snapshot of animalSnapshot){

        if(snapshot.timeId === id){
            const allAnimals = snapshot.allAnimals;

            for(let animal of allAnimals){
                const location = animal.location.split(' ');
                const xLocation = parseInt(location[0]) + parseInt(location[2]);
                const yLocation = parseInt(location[1]) + parseInt(location[3]);

                outputString += `${animal.animalId} ${xLocation.toString()} ${yLocation.toString()}\n`
            }
        }
    }

    return outputString.replace(/[\r\n]$/,'');
}

exports.printAnimalSnapShot = printAnimalSnapShot;

