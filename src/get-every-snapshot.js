'use strict';

function getEverySnapshot(animalSnapshotArray) {

    return animalSnapshotArray.map((animalSnapshot)=> animalSnapshot.split('\n'));
}

exports.getEverySnapshot = getEverySnapshot;