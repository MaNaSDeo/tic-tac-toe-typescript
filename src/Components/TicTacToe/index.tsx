import styles from "./TicTacToe.module.scss";
import useTicTacToe from "../../hooks/useTicTacToe";

function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();
  return (
    <div className={styles.game}>
      <div className={styles.status}>
        <span>{getStatusMessage()}</span>
        <button className={styles.resetButton} onClick={() => resetGame()}>
          Reset
        </button>
      </div>
      <div className={styles.board}>
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
