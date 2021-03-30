import React, { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';

import styles from './loading.module.scss';
import animationData from './loading.json';

export default function Loading() {
  const [isLoadLottie, setIsLoadLottie] = useState<boolean>(false);

  const animationBoxRef = useRef(null);

  useEffect(() => {
    if (!isLoadLottie) {
      lottie.loadAnimation({
        'container': animationBoxRef.current,
        'renderer': 'svg',
        'loop': true,
        'autoplay': true,
        animationData,
      });

      setIsLoadLottie(true);
    }
  }, [animationBoxRef]);

  return (
    <div id="lottie-container" className={styles.container}>
      <div className={styles.boxLottie}>
        <div className={styles.lottieImage} ref={animationBoxRef} />
      </div>
    </div>
  );
}
