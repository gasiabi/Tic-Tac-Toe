const squares = document.querySelectorAll('.square');
const restartButton = document.querySelector('.restart');

let isXturn = true;

squares.forEach(square => {
    square.addEventListener('click', function() {
        if (!square.textContent) {
            if (isXturn) {
                square.style.color = "#ef476f";
                square.textContent = "✖";
            } else {
                square.style.color = "#06D6A0";
                square.style.fontWeight = "bold"
                square.textContent = "〇";
            }
            isXturn = !isXturn;
        }
    });
});

restartButton.addEventListener('click', function() {
    squares.forEach(square => {
        square.textContent = "";
        square.style.color = "";
    });
    isXturn = true;
});
