'use strict';

const inputData = require('../src/judge-historydata-farmat');

describe('judgeInputDate ', ()=> {

    it('should return true when timeId and time are right', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeInputData(inputSnapshot);

        expect(result).toBeTruthy();
    });
});

describe('judgeInputData unit test', ()=> {

    it('should return true when timeId do not exist space', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeTimeIdFormat(inputSnapshot);

        expect(result).toBeTruthy();

    });

    it('should return false when timeId exists space', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f  9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeTimeIdFormat(inputSnapshot);

        expect(result).toBeFalsy();

    });

    it('should return false when timeId is null', ()=> {

        const inputSnapshot = [{
            timeId: ` `,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeTimeIdFormat(inputSnapshot);

        expect(result).toBeFalsy();

    });

    it('should return true when time inputData is right', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeTimeFormat(inputSnapshot);

        expect(result).toBeTruthy();
    });

    it('should return true when time inputData is false', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016.09.02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeTimeFormat(inputSnapshot);

        expect(result).toBeFalsy();
    });

    it('should return true when location is right', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeInputLocation(inputSnapshot);
        expect(result).toBeTruthy();
    });

    it('should return false when locations is false', ()=> {

        const inputSnapshot = [{
            timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
            time: `2016/09/02 22:30:46`,
            allAnimals: [`cat1 10 9 4`]
        }, {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [`cat1 10 9 2 -1`, `cat2 2 3`]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [`cat1 12 8 3 4`]
        }];

        const result = inputData.judgeInputLocation(inputSnapshot);
        expect(result).toBeFalsy();
    });
});

