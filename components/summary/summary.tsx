import styles from './summary.module.scss';

type propsTypes = {
  count: number,
  bestScore: number,
  handleNewGame: () => void,
  globalScore: number,
};

export default function Summary(props: propsTypes) {
  return (
    <div className={styles.container}>
      <div>Click: <span id="summary-count">{props.count}</span></div>
      <div>My Best: <span id="summary-best-count">{props.bestScore}</span></div>
      <div>Global Best: <span id="summary-global-count">{props.globalScore}</span></div>
      <div className={styles.boxBtn}>
        <span id="btn-new-game" className={styles.btnNewGame} onClick={props.handleNewGame}>New Game</span>
      </div>
    </div>
  );
}