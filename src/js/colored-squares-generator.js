const grid = document.getElementById('colors--grid');
let coloredSquares = [];

for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.classList.add('colored--square');
    grid.appendChild(square);
    coloredSquares.push(square);
}