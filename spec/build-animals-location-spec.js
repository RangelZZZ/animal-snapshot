'use strict';

const animalLocations = require('../src/build-animals-location');

describe('buildAnimalsLocation', ()=> {

    const snapshotArray = [{
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

    it('should return animal location', ()=> {

        const expectLocation = [{
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

        const result = animalLocations.buildAnimalLocations(snapshotArray);

        expect(result).toEqual(expectLocation);


    });

});

describe('getAnimalsLocation', ()=> {

    const animalLocation = [{
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

    it('should animal locations', ()=> {

        const expectAnimalLocations = [{
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
                }]
            }];

        const result = animalLocations.getAnimalLocation(animalLocation);

        expect(result).toEqual(expectAnimalLocations);
    });

    it('should return all animals', ()=> {

        const locations = [{
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
                }]
            }];

        const expectLocations = [{
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
        const result = animalLocations.buildAccurateLocation(locations);

        expect(result).toEqual(expectLocations);
    });
});




