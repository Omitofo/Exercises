const AllExceptSelf = require('../CodeExercises/ArrayExceptSelf');

describe('Test Suite for ArrayExceptSelf Problem', () => {
    test('check if it calculates products excluding self', () => {
        expect(AllExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });

    test('check if array is empty, return empty array []', () => {
        expect(AllExceptSelf([])).toEqual([]);
    });

    test('throws an error if input is not an array', () => {
        expect(() => AllExceptSelf(null)).toThrow('Input must be an array');
        expect(() => AllExceptSelf(123)).toThrow('Input must be an array');
        expect(() => AllExceptSelf('not an array')).toThrow('Input must be an array');
    });
});
