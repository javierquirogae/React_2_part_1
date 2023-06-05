function unroll(square) {
    const result = [];
  
    let startRow = 0;
    let endRow = square.length - 1;
    let startCol = 0;
    let endCol = square.length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      for (let i = startCol; i <= endCol; i++) {
        result.push(square[startRow][i]);
      }
      startRow++;
  
      for (let i = startRow; i <= endRow; i++) {
        result.push(square[i][endCol]);
      }
      endCol--;
  
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          result.push(square[endRow][i]);
        }
        endRow--;
      }
  
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          result.push(square[i][startCol]);
        }
        startCol++;
      }
    }
  
    return result;
  }
  
  module.exports = { unroll };
  