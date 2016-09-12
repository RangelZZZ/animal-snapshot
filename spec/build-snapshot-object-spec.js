'use strict';

const snapshotObject = require('../src/build-snapshot-object');

describe('buildSnapshotObject', ()=> {

    const snapShotArray = [['e4e87cb2-8e9a-4749-abb6-26c59344dfee', '2016/09/02 22:30:46', 'cat1 10 9'], ['351055db-33e6-4f9b-bfe1-16f1ac446ac1', '2016/09/02 22:30:52', 'cat1 10 9 2 -1', 'cat2 2 3'], ['dcfa0c7a-5855-4ed2-bc8c-4accae8bd155', '2016/09/02 22:31:02', 'cat1 12 8 3 4']];

    it('should build snapshot object', ()=> {

        const expectSnapshot = [{
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

        const snapshot = snapshotObject.buildSnapshotObject(snapShotArray);

        expect(snapshot).toEqual(expectSnapshot);
    });
});

