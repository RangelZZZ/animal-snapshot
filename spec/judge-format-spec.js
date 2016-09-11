'use strict';

const format = require('../src/judge-format');

describe('judgeFormat integration test',()=>{

    it('should return true when timeId and time are right',()=>{

        const animalLocation = [{
            timeId:`e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time:`2016/09/02 22:30:46`,
            allAnimals:[`cat1 10 9`]
        }];
        const result = format.judgeFormat(animalLocation[0]);

        expect(result).toBeTruthy();
    });
});

describe('judgeFormat unit test',()=>{

    it('should return true when timeId do not exist space',()=>{

        const animalLocation = [{
            timeId:`e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time:`2016/09/02 22:30:46`,
            allAnimals:[`cat1 10 9`]
        }];
        const result = format.judgeTimeIdFormat(animalLocation[0].timeId);

        expect(result).toBeTruthy();

    });

    it('should return false when timeId exists space',()=>{

        const animalLocation = [{
            timeId:`e4e87cb2-8e9a-4749 abb6-26c59344dfee`,
            time:`2016/09/02 22:30:46`,
            allAnimals:[`cat1 10 9`]
        }];
        const result = format.judgeTimeIdFormat(animalLocation[0].timeId);

        expect(result).toBeFalsy();

    });

    it('should return false when timeId is null',()=>{

        const animalLocation = [{
            timeId:` `,
            time:`2016/09/02 22:30:46`,
            allAnimals:[`cat1 10 9`]
        }];
        const result = format.judgeTimeIdFormat(animalLocation[0].timeId);

        expect(result).toBeFalsy();

    });

    it('should return true when time format is right',()=>{

        const animalLocation = [{
            timeId:`e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time:`2016/09/02 22:30:46`,
            allAnimals:[`cat1 10 9`]
        }];
        const result = format.judgeTimeFormat(animalLocation[0].time);

        expect(result).toBeTruthy();
    });

    it('should return true when time format is right',()=>{

        const animalLocation = [{
            timeId:`e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time:`2016.09.02 22:30:46`,
            allAnimals:[`cat1 10 9`]
        }];
        const result = format.judgeTimeFormat(animalLocation[0].time);

        expect(result).toBeFalsy();
    });
});