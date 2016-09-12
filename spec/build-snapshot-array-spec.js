'use strict';

const historyData = require('./fixture').loadHistoryData();
const snapshotArray = require('../src/build-snapshot-array');

describe('buildSnapshotArray', ()=> {

    it('should return snapshot array', ()=> {

        const result = snapshotArray.buildSnapshotArray(historyData);
        const expectArray = [['e4e87cb2-8e9a-4749-abb6-26c59344dfee', '2016/09/02 22:30:46', 'cat1 10 9'], ['351055db-33e6-4f9b-bfe1-16f1ac446ac1', '2016/09/02 22:30:52', 'cat1 10 9 2 -1', 'cat2 2 3'], ['dcfa0c7a-5855-4ed2-bc8c-4accae8bd155', '2016/09/02 22:31:02', 'cat1 12 8 3 4']];

        expect(result).toEqual(expectArray);
    });
});

describe('buildSnapshotAray unit test', ()=> {

    it('should build animal snapshot array', ()=> {

        const expectResult = [`e4e87cb2-8e9a-4749-abb6-26c59344dfee
2016/09/02 22:30:46
cat1 10 9`,
            `351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3`,
            `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
2016/09/02 22:31:02
cat1 12 8 3 4`];
        const result = snapshotArray.buildAnimalSnapshot(historyData);

        expect(result).toEqual(expectResult);
    });

    it('should return correct snapshot array', ()=> {

        const animal = [`e4e87cb2-8e9a-4749-abb6-26c59344dfee
2016/09/02 22:30:46
cat1 10 9`,
            `351055db-33e6-4f9b-bfe1-16f1ac446ac1
2016/09/02 22:30:52
cat1 10 9 2 -1
cat2 2 3`,
            `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155
2016/09/02 22:31:02
cat1 12 8 3 4`];
        const expectResult = [['e4e87cb2-8e9a-4749-abb6-26c59344dfee', '2016/09/02 22:30:46', 'cat1 10 9'], ['351055db-33e6-4f9b-bfe1-16f1ac446ac1', '2016/09/02 22:30:52', 'cat1 10 9 2 -1', 'cat2 2 3'], ['dcfa0c7a-5855-4ed2-bc8c-4accae8bd155', '2016/09/02 22:31:02', 'cat1 12 8 3 4']];
        const result = snapshotArray.buidEverySnapshot(animal);

        expect(result).toEqual(expectResult);
    });

});