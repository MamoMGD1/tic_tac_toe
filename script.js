const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let gameOver = false;
let humanScore = 0;
let aiScore = 0;
let rounds = 0;
let aiTurn = false;

document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    updateMessage("YOU GO FIRST");
});
function createBoard() {
    const boardDiv = document.querySelector(".play-board");
    boardDiv.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.id = `${i}${j}`;
            tile.addEventListener("click", () => handleClick(i, j));
            boardDiv.appendChild(tile);
        }
    }
}
function checkWinner(b) {
    for (let i = 0; i < 3; i++) {
        if (b[i][0] && b[i][0] === b[i][1] && b[i][1] === b[i][2]) return b[i][0]; // Rows
        if (b[0][i] && b[0][i] === b[1][i] && b[1][i] === b[2][i]) return b[0][i]; // Columns
    }
    if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) return b[0][0]; // Diagonal 1
    if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) return b[0][2]; // Diagonal 2
    if (b.flat().every(cell => cell)) return "Draw"; // No spaces left
    return null;
}
function minimax(b, isMax) {
    let winner = checkWinner(b);
    if (winner === "X") return { score: 10 };
    if (winner === "O") return { score: -10 };
    if (winner === "Draw") return { score: 0 };

    let bestMove = null;
    let bestScore = isMax ? -Infinity : Infinity;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!b[i][j]) {
                b[i][j] = isMax ? "X" : "O";
                let { score } = minimax(b, !isMax);
                b[i][j] = "";

                if (isMax ? score > bestScore : score < bestScore) {
                    bestScore = score;
                    bestMove = { i, j };
                }
            }
        }
    }
    return bestMove ? { ...bestMove, score: bestScore } : { score: bestScore };
}
function aiMove() {
    if (gameOver) return;
    let { i, j } = minimax(board, true);
    board[i][j] = "X";
    document.getElementById(`${i}${j}`).textContent = "X";
    checkGameEnd();
}
function handleClick(i, j) {
    if (!board[i][j] && !gameOver) {
        board[i][j] = "O";
        document.getElementById(`${i}${j}`).textContent = "O";
        checkGameEnd();
        if (!gameOver) aiMove();
    }
}
function checkGameEnd() {
    let winner = checkWinner(board);
    if (winner) {
        gameOver = true;
        if (winner === "X") {
            aiScore++;
            updateMessage("AS EXPECTED I WON!");
        } else if (winner === "O") {
            humanScore++;
            updateMessage("THAT'S A TRICK SHOT!");
        } else {
            updateMessage("IT'S A DRAW!");
        }
        rounds++;
        updateScores();
    }
}
function updateMessage(msg) {
    document.querySelector(".message").textContent = msg;
}
function updateScores() {
    document.getElementById("myScore").textContent = aiScore;
    document.getElementById("yourScore").textContent = humanScore;
    document.getElementById("roundsPlayed").textContent = rounds;
}
function resetGame() {
    gameOver = false;
    aiTurn = !aiTurn;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) board[i][j] = "";
    document.querySelectorAll(".tile").forEach(cell => (cell.textContent = ""));
    updateMessage(aiTurn? "NOW IT'S MY TURN" : "YOU GO FIRST");
    if(aiTurn) aiMove();
}