const app = require('../app');

describe('app', () => {
    describe('sortArray()', () => {
        it('returns a sorted array', () => {
            const result = app.sortArray([3, 2, 1, 5, 8, 0, -1, -6]);
            expect(result).toEqual([-6, -1, 0, 1, 2, 3, 5, 8]);
        });
    });

    describe('methodToTest()', () => {
        it('returns the sum of three numbers', () => {
            const result = app.methodToTest(1, 2, 3);
            expect(result).toEqual(6);
        });
    });
});
