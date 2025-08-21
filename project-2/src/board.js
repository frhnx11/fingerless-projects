function createBoard() {
  const board = document.getElementById('board');
  const cells = [];

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      if ((i < 6 && j < 6) || (i < 6 && j > 8) || (i > 8 && j < 6) || (i > 8 && j > 8)) {
        cell.classList.add('home');
        if (i < 6 && j < 6) cell.classList.add('red');
        if (i < 6 && j > 8) cell.classList.add('green');
        if (i > 8 && j < 6) cell.classList.add('blue');
        if (i > 8 && j > 8) cell.classList.add('yellow');
      }

      board.appendChild(cell);
      cells.push(cell);
    }
  }

  return cells;
}

function initializePieces() {
  const pieces = {
    red: [{ x: 1, y: 1 }, { x: 4, y: 1 }, { x: 1, y: 4 }, { x: 4, y: 4 }],
    green: [{ x: 10, y: 1 }, { x: 13, y: 1 }, { x: 10, y: 4 }, { x: 13, y: 4 }],
    yellow: [{ x: 10, y: 10 }, { x: 13, y: 10 }, { x: 10, y: 13 }, { x: 13, y: 13 }],
    blue: [{ x: 1, y: 10 }, { x: 4, y: 10 }, { x: 1, y: 13 }, { x: 4, y: 13 }]
  };

  Object.entries(pieces).forEach(([color, positions]) => {
    positions.forEach(pos => {
      const cell = document.querySelector(`.cell:nth-child(${pos.y * 15 + pos.x + 1})`);
      const piece = document.createElement('div');
      piece.classList.add('piece', color);
      cell.appendChild(piece);
    });
  });

  return pieces;
}

export { createBoard, initializePieces };
