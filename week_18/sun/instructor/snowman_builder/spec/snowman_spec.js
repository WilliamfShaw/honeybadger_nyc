let Snowman = require('../snowman');

describe('Snowman', () => {
    let snowman;
    let name;

    beforeEach(() => {
        name = 'Olaf';
        snowman = new Snowman(name);
    });

    it('has a defined name', function() {
        // expect(snowman.name).;
    });

    it('has a name', () => {
        expect(snowman.name).toBe(name);
    });

    it('has a carrot nose', () =>{
        expect(snowman.carrotNose).toBe(true);
    });

    it('has stick arms', () => {
        expect(snowman.hasStickArms).toBe(true);
    });

    describe('likeWarmHugs()', () => {
        describe('when snowmans name is Olaf', () => {
            it('returns true', () => {
                const result = snowman.likesWarmHugs();
                expect(result).toBe(true);
            });
        });

        describe('all other snowmen', () => {
            beforeEach(() => {
                snowman.name = 'Snowman';
            });

            it('returns false', () => {
                const result = snowman.likesWarmHugs();
                expect(result).toBe(false);
            });
        });
    });
});
