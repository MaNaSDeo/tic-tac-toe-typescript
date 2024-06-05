import { useState } from "react";
import styles from "./TicTacToe.module.scss";

function TicTacToe() {
  const ticTacToeArray = new Array(9).fill(null);
  console.log("ticTacToeArray", ticTacToeArray);
  const [activePlayer, setActivePlayer] = useState("Player 01");
  return (
    <div className={styles.game}>
      <div className={styles.status}>
        <span>Player X Turn</span>
        <button className={styles.resetButton}>Reset</button>
      </div>
      <div className={styles.board}>
        {ticTacToeArray &&
          ticTacToeArray.length &&
          ticTacToeArray.map((_, index) => {
            return (
              <button key={index} className={styles.cell}>
                X
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default TicTacToe;
