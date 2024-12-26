const trappingRainWater = require('../CodeExercises/TrappedWater.js');

describe('Trapping Rain Water', () => {
  test('should return 0 for an empty array', () => {
    expect(trappingRainWater([])).toBe(0);
  });

  test('should return 0 if no water can be trapped', () => {
    expect(trappingRainWater([1, 1, 1, 1])).toBe(0);
    expect(trappingRainWater([3, 2, 1])).toBe(0);
  });

  test('should calculate water trapped for basic cases', () => {
    expect(trappingRainWater([0, 1, 0, 2])).toBe(1);
    expect(trappingRainWater([3, 0, 1, 2, 0, 4])).toBe(9);
  });

  test('should handle large arrays', () => {
    const largeArray = [0, 1, 0, 2, 0, 3, 0, 4, 0, 1, 0, 2];
    expect(trappingRainWater(largeArray)).toBe(11);
  });
});
