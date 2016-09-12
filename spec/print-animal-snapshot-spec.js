'use strict';

const animalSnapShot = require('../src/print-animal-snapshot');
const inputId = require('./fixture').loadInputId();

describe('printAnimalSnapshot', ()=> {

    const animalLocation = [{
        timeId: `e4e87cb2-8e9a-4749-abb6-26c59344dfee`,
        time: `2016/09/02 22:30:46`,
        allAnimals: [{
            animalId: `cat1`,
            location: `10 9 0 0`,
        }]
    },
        {
            timeId: `351055db-33e6-4f9b-bfe1-16f1ac446ac1`,
            time: `2016/09/02 22:30:52`,
            allAnimals: [{
                animalId: `cat1`,
                location: `10 9 2 -1`
            }, {
                animalId: `cat2`,
                location: `2 3 0 0`
            }]
        }, {
            timeId: `dcfa0c7a-5855-4ed2-bc8c-4accae8bd155`,
            time: `2016/09/02 22:31:02`,
            allAnimals: [{
                animalId: `cat1`,
                location: `12 8 3 4`
            }, {
                animalId: `cat2`,
                location: `2 3 0 0`
            }]
        }];

    it('should print animal snapshot', ()=> {

        const expectResult = `cat1 15 12
cat2 2 3`;
        const result = animalSnapShot.printAnimalSnapShot(animalLocation, inputId);
        expect(result).toEqual(expectResult);
    });
});