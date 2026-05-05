import { useGame } from "./Hooks/useGame";
import { BoardGame, ButtonRest, WinnerModal, TurnsGame } from "./components";
import "./App.css";

function App() {
  const { turn, winner, board, resetGame, updateBoard } = useGame();

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <ButtonRest resetGame={resetGame} />

      <BoardGame board={board} updateBoard={updateBoard} />

      <TurnsGame turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
