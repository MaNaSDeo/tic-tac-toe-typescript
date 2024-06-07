import styles from "./TicTacToe.module.scss";
import useTicTacToe from "../../hooks/useTicTacToe";

interface TicTacToeProps {
  numRow: number;
}

function TicTacToe({ numRow }: TicTacToeProps) {
  const { board, handleClick, getStatusMessage, resetGame } =
    useTicTacToe(numRow);

  return (
    <div className={styles.game} style={{ maxWidth: `${numRow * 100}px` }}>
      <div className={styles.status}>
        <span>{getStatusMessage()}</span>
        <button className={styles.resetButton} onClick={() => resetGame()}>
          Reset
        </button>
      </div>
      <div
        className={styles.board}
        style={{ gridTemplateColumns: `repeat(${numRow}, 1fr)` }}
      >
        {board &&
          board.length &&
          board.map((b, index) => {
            return (
              <button
                key={index}
                className={styles.cell}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default TicTacToe;
