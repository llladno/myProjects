const game = document.getElementById('game');
const rows = 10;
const cols = 10;
const mineCount = 20;
const cells = [];

// Создаем ячейки игрового поля
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-row', i);
    cell.setAttribute('data-col', j);
    cells.push(cell);
    game.appendChild(cell);
  }
}

// Расставляем мины случайным образом
for (let i = 0; i < mineCount; i++) {
  let randomCellIndex = Math.floor(Math.random() * cells.length);
  cells[randomCellIndex].classList.add('mine');
  cells.splice(randomCellIndex, 1);
}

// Добавляем обработчики клика на ячейки
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('mine')) {
      // Если на ячейке есть мина, игра заканчивается
      alert('Game Over');
    } else {
      // Иначе показываем количество мин вокруг ячейки
      const row = parseInt(cell.getAttribute('data-row'));
      const col = parseInt(cell.getAttribute('data-col'));
      const mineCount = getMineCount(row, col);
      cell.textContent = mineCount;
    }
  });
});

// Функция для подсчета количества мин вокруг ячейки
function getMineCount(row, col) {
  let count = 0;
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i >= 0 && i < rows && j >= 0 && j < cols) {
        const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
        if (cell.classList.contains('mine')) {
          count++;
        }
      }
    }
  }
  return count;
}
