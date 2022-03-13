let container = document.querySelector(".container");

function createBoard() {
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("id", `${i}${j}`);
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

createBoard();

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("cell")) {
    const id = e.target.id;
    let row = parseInt(id[0]);
    let col = parseInt(id[1]);

    document.getElementById(`${row}${col}`).classList.add("active");

    let col1 = col - 1;
    let col2 = col + 1;
    for (let i = row + 1; i < 8; i++) {
      if (col1 >= 0) {
        document.getElementById(`${i}${col1}`).classList.add("active");
      }

      if (col2 < 8) {
        document.getElementById(`${i}${col2}`).classList.add("active");
      }

      col1--;
      col2++;
    }

    col1 = col - 1;
    col2 = col + 1;
    for (let i = row - 1; i >= 0; i--) {
      if (col1 >= 0) {
        document.getElementById(`${i}${col1}`).classList.add("active");
      }

      if (col2 < 8) {
        document.getElementById(`${i}${col2}`).classList.add("active");
      }
      
      col1--;
      col2++;
    }
  }
});
