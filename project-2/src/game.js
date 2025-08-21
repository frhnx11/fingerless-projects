function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function movePiece(color, steps, pieces, board) {
  const piece = pieces[color][0]; // For simplicity, always move the first piece
  const path = getPath(color);
  
  let currentIndex = path.findIndex(pos => pos.x === piece.x && pos.y === piece.y);
  let newIndex = (currentIndex + steps) % path.length;
  
  // Remove piece from current position
  const currentCell = board[piece.y * 15 + piece.x];
  currentCell.innerHTML = '';
  
  // Update piece position
  piece.x = path[newIndex].x;
  piece.y = path[newIndex].y;
  
  // Add piece to new position
  const newCell = board[piece.y * 15 + piece.x];
  const pieceElement = document.createElement('div');
  pieceElement.classList.add('piece', color);
  newCell.appendChild(pieceElement);
}

function getPath(color) {
  // This is a simplified path. You'll need to implement the full Ludo path.
  const paths = {
    red: [
      {x: 6, y: 1}, {x: 6, y: 2}, {x: 6, y: 3}, {x: 6, y: 4}, {x: 6, y: 5},
      {x: 5, y: 6}, {x: 4, y: 6}, {x: 3, y: 6}, {x: 2, y: 6}, {x: 1, y: 6},
      {x: 0, y: 7}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8},
      {x: 5, y: 8}, {x: 6, y: 9}, {x: 6, y: 10}, {x: 6, y: 11}, {x: 6, y: 12},
      {x: 6, y: 13}, {x: 7, y: 14}, {x: 8, y: 13}, {x: 8, y: 12}, {x: 8, y: 11},
      {x: 8, y: 10}, {x: 8, y: 9}, {x: 9, y: 8}, {x: 10, y: 8}, {x: 11, y: 8},
      {x: 12, y: 8}, {x: 13, y: 8}, {x: 14, y: 7}, {x: 13, y: 6}, {x: 12, y: 6},
      {x: 11, y: 6}, {x: 10, y: 6}, {x: 9, y: 6}, {x: 8, y: 5}, {x: 8, y: 4},
      {x: 8, y: 3}, {x: 8, y: 2}, {x: 8, y: 1}, {x: 7, y: 0}, {x: 7, y: 1},
      {x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6}
    ]
  };
  
  // For simplicity, we're using the same path for all colors
  return paths.red;
}

export { rollDice, movePiece };
