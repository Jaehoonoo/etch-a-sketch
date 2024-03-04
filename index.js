document.addEventListener("DOMContentLoaded",function() {
    function createSquares() {
        const grid = document.querySelector('.grid');

        for (let i = 0; i < 16; i++) {
            const square = document.createElement('div');
            square.className = 'square';
            grid.appendChild(square);
        }
    }
    createSquares();


});
