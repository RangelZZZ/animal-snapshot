'use strict';

function getAnimalLocation(snapShotArray) {

    const animalArray = snapShotArray.map((snapShot) => {

        for(let i = 0; i < snapShot.length; i++){

            const object = {timeId: '', time: '', allAnimals: []};

            object.timeId = snapShot[0];
            object.time = snapShot[1];
            object.allAnimals = snapShot.slice(2);

            return object;
        }
    });

    return animalArray;
}

exports.getAnimalLocation = getAnimalLocation;



