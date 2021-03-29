import React, { useState, useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

import Summary from '../components/summary/summary';
import Cards from '../components/card/card';

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [isFinish, setIsFinish] = useState<boolean>(false);

  const ref = useRef(null);

  const handleCount = (): void => setCount(count + 1);

  const handleFinishGame = (): void => setIsFinish(true);

  const handleNewGame = (): void => {
    try {
      ref.current?.handleResetGame();
    } catch (error) {
      return
    }
  }

  const handleResetGame = () => {
    setTimeout(() => {
      ref.current?.handleResetGame();
      setIsFinish(false);
    }, 1000);
  }

  useEffect(() => {
    if (isFinish) {
      if (count < bestScore || bestScore === 0) {
        setBestScore(count);
      }
      setCount(0);
      handleResetGame();
    }
  }, [isFinish])

  console.log('>>>', process.env)

  return (
    <div className={styles.container}>
      <div>
        <Summary count={count} bestScore={bestScore} handleNewGame={handleNewGame} />
        <Cards ref={ref} handleCount={handleCount} handleFinishGame={handleFinishGame} />
      </div>
    </div>
  );
}
