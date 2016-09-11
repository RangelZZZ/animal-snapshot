'use strict';

function judgeInputData(snapshotArray) {


    const timeIdResult = judgeTimeIdFormat(snapshotArray);
    const timeResult = judgeTimeFormat(snapshotArray);

    return timeIdResult && timeResult;
}

function judgeTimeIdFormat(snapshotArray) {

    return snapshotArray.every((snapshot)=> {

        const timeId = snapshot.timeId;
        if (timeId === ' ') {

            return false;
        } else {
            return timeId.split('').every((id) => (id !== ' '));
        }
    });
}

function judgeTimeFormat(snapshotArray) {

    return snapshotArray.every((snapshot) =>{
        return /^\d{4}\/(?:0?\d|1[12])\/(?:[012]?\d|3[0-1]) (?:[0-1]?\d|2[0-3]):(?:[0-5]?\d|60):(?:[0-5]?\d|60)$/.test(snapshot.time);

    });
}


function judgeInputLocation(snapshotArray) {

    return snapshotArray.every((snapshot) =>{

        return snapshot.allAnimals.every((animal) =>{

           const length =  animal.split(' ').length;
            if(length === 3 || length === 5){
                return true;
            }
       });
    });
}


module.exports = {

    judgeInputData:judgeInputData,
    judgeTimeIdFormat:judgeTimeIdFormat,
    judgeTimeFormat:judgeTimeFormat,
    judgeInputLocation:judgeInputLocation
};
