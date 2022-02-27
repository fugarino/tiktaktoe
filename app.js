// Module
const GameBoard = (() => {
  // Selectors
  const squares = document.querySelectorAll(".square");
  // Player
  const Player = (name, marker) => {
    const getName = () => console.log(name);
    const getMarker = () => console.log(marker);
    return {
      getName,
      getMarker,
    };
  };
  // Game
  const Game = () => {
    const player1 = Player("Player1", "X");
    const player2 = Player("Player2", "O");
    player1.getMarker();
    player2.getName();
  };
  Game();
  // User Input
  const getInput = () => {
    squares.forEach((square) => {
      square.addEventListener("click", (e) => {
        console.log(e.target);
      });
    });
  };
  getInput();
})();
