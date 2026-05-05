import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "../constants";
import { checkEndGame, checkWinner } from "../logic/logic";

export const useGame = () => {
  //Estados
  const [board, setBoard] = useState(() => {
    const boardToLocalStorage = window.localStorage.getItem("board");
    return boardToLocalStorage
      ? JSON.parse(boardToLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnToLocalStorage = window.localStorage.getItem("turn");
    return turnToLocalStorage ? JSON.parse(turnToLocalStorage) : TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null, no hay ganador. False, hay un empate.

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
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

    //Guardar partida.
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));

    //Revisar si hay un ganador.
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      //Actualizar el estado con el nuevo ganador.
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return {
    board,
    turn,
    winner,
    updateBoard,
    resetGame,
  };
};
