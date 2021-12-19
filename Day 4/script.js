const fs = require("fs");

fs.readFile("./boards.txt", (err, data) => {
  //HELPER
  const calculateWinningBoard = () => {
    let boards = data
      .toString()
      .split(/\n{2}/)
      .map((board) => board.split(/\n/));

    boards.forEach((board) => {
      for (i = 0; i < board.length; i++) {
        board[i] = board[i].trim().split(/\s+/).join(" ").split(" ");
        if (board[5]) {
          board.pop();
        }
      }
    });
    console.log(boards);
  };

  //SOLUTION 1
  const calculateScore = () => {};

  calculateWinningBoard();
});
