document.addEventListener("DOMContentLoaded",function() {
    //Creates a grid of squares specified by number of columns and rows
    function createSquares(cols, rows) {
        const grid = document.querySelector('.grid');

        for (let i = 0; i < (cols * rows); i++) {
            const square = document.createElement('div');
            square.className = 'square';
            grid.appendChild(square);
        }
    }
    createSquares(16, 16);


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
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
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


    const resetBtn = document.querySelector('.reset');
    const changeGridBtn = document.querySelector('change-size');

    resetBtn.addEventListener('click', function () {
        squares.forEach(square => {
            square.style.backgroundColor = '';
        });
    });


});
