const twoSum = require('../CodeExercises/TwoSum');

describe('twoSum', () => {
  
  // Test case 1: Basic test case
  test('should return the indices of two numbers that add up to the target', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]); // The expected output is [0, 1]
  });

  // Test case 2: No solution (should return an empty array)
  test('should return an empty array when no solution is found', () => {
    const result = twoSum([1, 2, 3, 4], 8);
    expect(result).toEqual([]); // No pair adds up to 8
  });

  // Test case 3: Target is 0 (edge case)
  test('should return the indices when target is 0', () => {
    const result = twoSum([0, 4, 3, 0], 0);
    expect(result).toEqual([0, 3]); // Indices 0 and 3 sum up to 0
  });

  // Test case 4: Negative numbers
  test('should return the correct indices for negative numbers', () => {
    const result = twoSum([-1, -2, -3, -4], -6);
    expect(result).toEqual([1, 3]); // -2 + -4 = -6
  });
});

