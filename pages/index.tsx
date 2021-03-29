import React, { useState } from 'react';

import styles from '../styles/Home.module.css';

import Summary from '../components/summary/summary';
import Cards from '../components/card/card';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => setCount(count + 1);

  return (
    <div className={styles.container}>
      <div>
        <Summary count={count} />
        <Cards handleCount={handleCount} />
      </div>
    </div>
  );
}
