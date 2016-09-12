'use strict';

function buildSnapshotArray(historyData) {

    const animalSnapshotArray = buildAnimalSnapshot(historyData);
    return buildEverySnapshot(animalSnapshotArray);
}

function buildAnimalSnapshot(historyData) {

    return historyData.split('\n\n');
}

function buildEverySnapshot(animalSnapshotArray) {

    return animalSnapshotArray.map((animalSnapshot)=> animalSnapshot.split('\n'));
}


module.exports = {
    buildAnimalSnapshot: buildAnimalSnapshot,
    buidEverySnapshot: buildEverySnapshot,
    buildSnapshotArray: buildSnapshotArray
};