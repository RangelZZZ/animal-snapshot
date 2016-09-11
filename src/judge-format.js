'use strict';

function judgeFormat(animalLocation) {

    const timeIdResult = judgeTimeIdFormat(animalLocation.timeId);
    const timeResult = judgeTimeFormat(animalLocation.time);

    return timeIdResult && timeResult;
}

function judgeTimeIdFormat(timeId){

    if(timeId ===' '){

        return false;
    }else{
        return  timeId.split('').every((id) => (id !==' '));
    }
}

function judgeTimeFormat(time) {

     return /^\d{4}\/(?:0?\d|1[12])\/(?:[012]?\d|3[0-1]) (?:[0-1]?\d|2[0-3]):(?:[0-5]?\d|60):(?:[0-5]?\d|60)$/.test(time);
}

module.exports = {

    judgeFormat:judgeFormat,
    judgeTimeIdFormat:judgeTimeIdFormat,
    judgeTimeFormat:judgeTimeFormat
};
