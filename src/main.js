'use strict';

const snapshot = require('./build-snapshot-array');
const snapshot1 = require('./build-snapshot-object');
const inputDate = require('./judge-historydata-farmat');
const animalsLocation = require('./build-animals-location');
const animalSnapshot = require('./print-animal-snapshot');

function getSnapshot(historyData, id) {

    const snapshotArray  = snapshot.buildSnapshotArray(historyData);
    const snapshotObject = snapshot1.buildSnapshotObject(snapshotArray);
    const validInputDate = inputDate.judgeInputData(snapshotObject);

    if (!validInputDate) {
        console.log('Invalid format');

        return;
    }

    const location = animalsLocation.buildAnimalLocations(snapshotObject);

    if(typeof (location) === "string"){
        console.log(`Conflict found at ${location}`);

        return;
    }
    const snapshotString = animalSnapshot.printAnimalSnapShot(location, id);

    console.log(snapshotString);
}

exports.getSnapshot = getSnapshot;