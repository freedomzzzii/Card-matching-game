import type { AppProps } from 'next/app';

import styles from './summary.module.scss';

type propsTypes = {
  count: number,
};

export default function Summary(props: propsTypes) {
  return (
    <div className={styles.container}>
      <div>Click: {props.count}</div>
      <div>My Best:</div>
      <div>Global Best:</div>
      <div className={styles.btnNewGame}>New Game</div>
    </div>
  );
}