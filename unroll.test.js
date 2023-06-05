const { unroll } = require('./unroll');

describe('unroll', () => {
  it('should unroll a square array of numbers in a spiral', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expectedResult = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

    const result = unroll(square);

    expect(result).toEqual(expectedResult);
  });

  it('should unroll a square array of strings in a spiral', () => {
    const square = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expectedResult = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];

    const result = unroll(square);

    expect(result).toEqual(expectedResult);
  });

  it('should handle an empty square array', () => {
    const square = [];
    const expectedResult = [];

    const result = unroll(square);

    expect(result).toEqual(expectedResult);
  });

  it('should handle a square array with a single element', () => {
    const square = [[42]];
    const expectedResult = [42];

    const result = unroll(square);

    expect(result).toEqual(expectedResult);
  });

});
