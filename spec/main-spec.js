'use strict';

const inputData = require('./fixture');
const main = require('../src/main');

describe('mianTest', ()=> {

    const id = inputData.loadInputId();

    it("should output animal snapshot", ()=> {
        const historyData = inputData.loadHistoryData();

        spyOn(console, 'log');

        main.getSnapshot(historyData, id);
        expect(console.log).toHaveBeenCalledWith(`cat1 15 12
cat2 2 3`)
    });

    it('should output valid Invalid format when historyDate is invalid', ()=> {

        const historyData = `e4e87cb2-8e9a 4749-abb6-26c59344dfee
        2016 09 02 22:30:46
        cat1 10 9
        
        351055db-33e6 4f9b-bfe1-16f1ac446ac1
        2016/09/02 22:30:52
        cat1 10 9 2 -1
        cat2 2 3
        
        dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
        2016/09/02 22:31:02
        cat1 12 8 3 4`;

        spyOn(console, 'log');
        main.getSnapshot(historyData, id);

        expect(console.log).toHaveBeenCalledWith(`Invalid format`);
    });

    it('should output conflict information when historyDate is wrong',()=> {

        const historyData = `e4e87cb2-8e9a-4749-abb6-26c59344dfee
2016/09/02 22:30:46
cat1 10 9

351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3

dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
2016/09/02 22:31:02
cat1 11 8 3 4`;

        spyOn(console, 'log');
        main.getSnapshot(historyData, id);

        expect(console.log).toHaveBeenCalledWith(`Conflict found at dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`);
    });
});