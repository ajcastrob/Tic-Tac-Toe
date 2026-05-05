import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = isSelected ? "is-selected" : "";

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={`square ${className}`}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null, no hay ganador. False, hay un empate.

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && //Comprobar que la posición no este vacía.
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]; //devolver el ganador.
      }
    }

    //Si no hay ganador se devuelve null
    return null;
  };

  const updateBoard = (index) => {
    //Para evitar que se sobreescriba la celda.
    if (board[index] || winner) return;

    //Establecer el nuevo tablero.
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Establecer el nuevo turno.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Revisar si hay un ganador.
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      //Actualizar el estado con el nuevo ganador.
      setWinner(newWinner);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
