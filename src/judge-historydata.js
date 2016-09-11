'use strict';

function judgeHistoryData(historydata) {
    let result = '';

    for (let i = 1; i < historydata.length; i++) {

        const animals = historydata[i].allAnimals;
        const preAnimals = historydata[i - 1].allAnimals;

        for (let animal of animals) {
            const animalId = animal.animalId;
            const animalLocation = animal.location.split(' ');

            for (let preAnimal of preAnimals) {
                if (preAnimal.animalId == animalId) {

                    const location = preAnimal.location.split(' ');
                    const xLocation = parseInt(location[0]) + parseInt(location[2]);
                    const yLocation = parseInt(location[1]) + parseInt(location[3]);

                    if ((xLocation == animalLocation[0]) && (yLocation == animalLocation[1])) {
                         result = true;
                    }
                }
            }
        }
    }

    return result;
}



exports.judgeHistoryData = judgeHistoryData;