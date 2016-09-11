'use strict';

const historyData = require('../spec/fixture').loadHistoryData();
const aniamlSnapshot = require('./build-animal-snapshot');
const everySnapshot = require('./get-every-snapshot');



function getSnapshot() {
    const animalSnapshotArray = aniamlSnapshot.buildAnimalSnapshot(historyData);
    const everySnapshot = everySnapshot.getEverySnapshot(animalSnapshotArray);

    return everySnapshot;
}