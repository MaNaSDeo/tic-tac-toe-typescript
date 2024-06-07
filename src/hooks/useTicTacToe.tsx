import { useState } from "react";
type BoardValue = "X" | "O" | null;

const initialBoard = (num: number): BoardValue[] => Array(num * num).fill(null);

const useTicTacToe = (num: number) => {
  const [board, setBoard] = useState<BoardValue[]>(initialBoard(num));
  const [isXNext, setIsXNext] = useState(true);

  let WINNING_PATTERNS = Array();

  for (let i = 0; i < num; i++) {
    const rowPattern = [];
    for (let j = 0; j < num; j++) {
      rowPattern.push(i * num + j);
    }
    WINNING_PATTERNS.push(rowPattern);
  }

  for (let i = 0; i < num; i++) {
    const colPattern = [];
    for (let j = 0; j < num; j++) {
      colPattern.push(i + j * num);
    }
    WINNING_PATTERNS.push(colPattern);
  }
  const digonal1 = [];
  for (let i = 0; i < num; i++) {
    digonal1.push((num + 1) * i);
  }
  WINNING_PATTERNS.push(digonal1);

  const digonal2 = [];
  for (let i = 0; i < num; i++) {
    digonal2.push((num - 1) * (i + 1));
  }
  WINNING_PATTERNS.push(digonal2);

  console.log("WINNING_PATTERNS", WINNING_PATTERNS);

  /*
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard: BoardValue[]): string | null => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  */
  const calculateWinner = (currentBoard: BoardValue[]): BoardValue => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const pattern = WINNING_PATTERNS[i];
      const firstValue = currentBoard[pattern[0]];
      if (
        firstValue &&
        pattern.every((index: number) => currentBoard[index] === firstValue)
      ) {
        return firstValue;
      }
    }
    return null;
  };

  const handleClick = (index: number): void => {
    //Check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = (): string => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;

    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard(num));
    setIsXNext(true);
  };

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
