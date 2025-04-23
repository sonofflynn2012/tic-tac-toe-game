const Player_X = "X";
const Player_O = "O";
const board = document.getElementById("board");
let PlayerName = Player_X;

function makeColumnHtml(id, marker) {
    return `<td id="${id}" onclick="cellClick(this)">[${marker}]</td>`;
}

function cellClick(cell) {
    if (cell.innerHTML.includes(Player_X) || cell.innerHTML.includes(Player_O)) {
        alert("This cell is already taken!");
        return;
    }
    cell.innerHTML = makeColumnHtml(cell.id, PlayerName);
    switchPlayer();
}

function displayPlayerName() {
    document.getElementById("currentPlayer").innerHTML = "Current Player: " + PlayerName;
}

function switchPlayer() {
    PlayerName = (PlayerName === Player_X) ? Player_O : Player_X;
    displayPlayerName();
}

function init() {
    PlayerName = Player_X;
    displayPlayerName();
    let boardHtml = "";

    for (let ix = 0; ix < 3; ix++) {
        boardHtml += "<tr>";
        for (let jx = 0; jx < 3; jx++) {
            boardHtml += makeColumnHtml(`${ix}_${jx}`, "_");
        }
        boardHtml += "</tr>";
    }

    board.innerHTML = boardHtml;
}

init();
