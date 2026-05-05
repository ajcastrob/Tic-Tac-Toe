import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  //Revisamos si hay un empate
  //si no hay más espacios vacíos
  //en el tablero.

  //Comprobar que todos los espacios son diferentes de null
  return newBoard.every((square) => square !== null);
};
