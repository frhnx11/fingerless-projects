function generateSudoku() {
  const board = Array(9).fill().map(() => Array(9).fill(0));
  
  function isValid(num, row, col) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }
    
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  function solve(row = 0, col = 0) {
    if (col === 9) {
      row++;
      col = 0;
    }
    if (row === 9) {
      return true;
    }
    if (board[row][col] !== 0) {
      return solve(row, col + 1);
    }
    for (let num = 1; num <= 9; num++) {
      if (isValid(num, row, col)) {
        board[row][col] = num;
        if (solve(row, col + 1)) {
          return true;
        }
        board[row][col] = 0;
      }
    }
    return false;
  }
  
  solve();
  return board;
}

function isValidSudoku(board) {
  function isValidUnit(unit) {
    const seen = new Set();
    for (const num of unit) {
      if (num !== 0) {
        if (seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
    }
    return true;
  }

  // Check rows
  for (let i = 0; i < 9; i++) {
    if (!isValidUnit(board[i])) {
      return false;
    }
  }

  // Check columns
  for (let j = 0; j < 9; j++) {
    const column = board.map(row => row[j]);
    if (!isValidUnit(column)) {
      return false;
    }
  }

  // Check 3x3 sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const box = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          box.push(board[boxRow * 3 + i][boxCol * 3 + j]);
        }
      }
      if (!isValidUnit(box)) {
        return false;
      }
    }
  }

  return true;
}

export { generateSudoku, isValidSudoku };
