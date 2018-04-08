const app = require('../app');
const sinon = require('sinon');
// require('jasmine-sinon');

describe('app', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

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

    describe('sinonSpy()', () => {
        it('uses spy to show external function was called', () => {
            const spy = sandbox.spy(Date, 'now');
            app.sinonSpy();

            expect(spy.calledOnce).toBe(true);
        });
    });

    describe('sinonStub()', () => {
        it('it returns the stubbed value', () => {
            const stub = sandbox.stub(Date, 'now').returns(true);
            const result = app.sinonStub();

            console.log(result);
            expect(result).toBe(true);
        });
    });

    afterEach(() => {
        sandbox.restore();
    });
});
