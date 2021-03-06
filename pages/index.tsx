import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/Home.module.scss';

import Summary from '../components/summary/summary';
import Cards from '../components/card/card';
import { fetchGetBestScore, fetchUpdateBestScore } from '../redux/action';
import constant from '../common/constant';
import Loading from '../components/loading/loading';
import '../shared/firebase';

type stateTypes = {
  globalBestScore: {
    type: string,
    data?: {
      score: number,
    },
  },
};

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [globalScore, setGlobalScore] = useState<number>(0);

  const ref = useRef(null);
  const dispatch = useDispatch();
  const { globalBestScore } = useSelector((state: stateTypes) => state);

  const handleCount = (): void => setCount(count + 1);

  const handleFinishGame = (): void => setIsFinish(true);

  const handleNewGame = (): void => {
    try {
      setCount(0);
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
  };

  useEffect(() => {
    if (!isReady) {
      dispatch(fetchGetBestScore());
    }
  }, [isReady]);

  useEffect(() => {
    if (isFinish) {
      if (count < bestScore || bestScore === 0) {
        setBestScore(count);
      }
      if (count < globalScore || globalScore === 0) {
        dispatch(fetchUpdateBestScore({ score: count }));
      }
      setCount(0);
      handleResetGame();
    }
  }, [isFinish]);

  useEffect(() => {
    if (globalBestScore.type === constant.GET_BEST_SCORE_SUCCESS || globalBestScore.type === constant.UPDATE_BEST_SCORE_SUCCESS) {
      if (globalBestScore.data?.score) {
        setGlobalScore(globalBestScore.data?.score);
      }
      setIsReady(true);
    }
  }, [globalBestScore]);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxSummary}>
        <Summary count={count} bestScore={bestScore} globalScore={globalScore} handleNewGame={handleNewGame} />
      </div>
      <div className={styles.boxCards}>
        <Cards ref={ref} handleCount={handleCount} handleFinishGame={handleFinishGame} />
      </div>
    </div>
  );
}
