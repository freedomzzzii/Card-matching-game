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
      <div>Click: {props.count}</div>
      <div>My Best: {props.bestScore}</div>
      <div>Global Best: {props.globalScore}</div>
      <div className={styles.boxBtn}>
        <span className={styles.btnNewGame} onClick={props.handleNewGame}>New Game</span>
      </div>
    </div>
  );
}