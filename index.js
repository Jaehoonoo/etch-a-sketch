document.addEventListener("DOMContentLoaded",function() {
    const grid = document.querySelector('.grid');

    //Creates a grid of squares specified by number of columns and rows
    function createSquares(numCells) {
        grid.innerHTML = '';

        const numRows = Math.ceil(Math.sqrt(numCells));
        const cellSize = 800 / numRows;

        for (let i = 0; i < (numCells); i++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.width = cellSize + 'px';
            square.style.height = cellSize + 'px';
            grid.appendChild(square);
        }
    }
    createSquares(256);
    draw();


    //Gets a random color for each square
    function getRandomColor() {
        const hex = ('0123456789ABCDEF');
        let color = '#';
        for (let i =0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    //Changes color of each square if mouse click is down
    function draw() {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('mousedown', function () {
                const randomColor = getRandomColor();
                this.style.backgroundColor = randomColor;
            });

            square.addEventListener('mouseenter', function (event) {
                if (event.buttons === 1) {
                    const randomColor = getRandomColor();
                    this.style.backgroundColor = randomColor;
                }
            });
        });
    };


    const resetBtn = document.querySelector('.reset');
    const changeGridBtn = document.querySelector('.change-size');

    //Resets the grid when reset button clicked
    resetBtn.addEventListener('click', function () {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = '';
        });
    });

    //Changes the grid size, with a max of 100x100
    changeGridBtn.addEventListener('click', function () {
        const gridSize = parseInt(prompt('Enter a number of up to 100 for a new grid (e.g., 100 for a 100x100 grid):'));
        
        if (!isNaN(gridSize)) {
            createSquares(gridSize * gridSize);
            draw();
        }
    });


});
