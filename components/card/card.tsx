import React, { useState, useEffect, forwardRef, useImperativeHandle, Ref } from 'react';

import styles from './card.module.scss';

import { shuffle } from '../../shared/shuffle';
import constant from '../../common/constant';
import Loading from '../loading/loading';

type propsCardTypes = {
  number: string,
  onClick: (index: number) => void,
  index: number,
  status: 'compare' | 'success' | null
};
type propsCardsTypes = {
  handleCount: () => void,
  handleFinishGame: () => void,
};
type selectCardsType = {
  selectIndex: null | number,
  selectCards: Array<'compare' | 'success' | null>
};

function Card(props: propsCardTypes) {
  return (
    <div id={`box-card-${props.index}`} className={styles.boxCard} onClick={() => props.onClick(props.index)}>
      <div id={`card-${props.index}`} className={styles.card}>
        <div className={styles.back} />
        <div className={styles.front} id={`card-number-${props.index}`} />
      </div>
    </div>
  );
}

export default forwardRef(function Cards(props: propsCardsTypes, ref: Ref<{}>) {
  const [cards, setCards] = useState<Array<string>>([]);
  const [selectCards, setSelectCards] = useState<selectCardsType>({ selectIndex: null, selectCards: [] });
  const [isReady, setIsReady] = useState<boolean>(false);

  const handleSelectCard = (index: number) => {
    try {
      if (isReady && !selectCards.selectCards[index]) { // check is ready to flip card and check this card is not matched?
        props.handleCount(); // count click

        if (selectCards.selectIndex === null) { // check card is not have pair of cards
          selectCards.selectIndex = index;
          selectCards.selectCards[index] = 'compare';
          setSelectCards(selectCards);
          handleFlipCard(index);
        } else { // compare card
          if (cards[index] === cards[selectCards.selectIndex]) { // matched
            selectCards.selectCards[index] = 'success';
            selectCards.selectCards[selectCards.selectIndex] = 'success';
            selectCards.selectIndex = null; // reset select card

            setSelectCards(selectCards);
            handleFlipCard(index);

            handleCheckMatchAll();
          } else { // not match
            handleFlipCard(index);
            setIsReady(false); // set this value for can not click card before card is not finish flip

            setTimeout(() => { // set timeout for flip card not match
              handleFlipCard(index);
              handleFlipCard(selectCards.selectIndex);
              selectCards.selectCards[index] = null;
              selectCards.selectCards[selectCards.selectIndex] = null;
              selectCards.selectIndex = null;
              setSelectCards(selectCards);
              setIsReady(true);
            }, 1000);
          }
        }
      }
    } catch (error) {
      return
    }
  }

  const handleFlipCard = (index: number): void => {
    try {
      const card = document.getElementById(`card-${index}`);
      const cardFront = document.getElementById(`card-number-${index}`);
      const isFlip = card.className === styles.flip;

      if (isFlip) {
        cardFront.removeChild(cardFront.childNodes[0]);

        card.className = styles.card;
      } else {
        const element = document.createElement('div');

        element.innerHTML = `${cards[index]}`;
        cardFront.appendChild(element);

        card.className = styles.flip;
      }
    } catch (error) {
      return
    }
  }

  const handleFlipAll = () => {
    try {
      cards.forEach((number, index) => document.getElementById(`card-${index}`).className = styles.card);
    } catch (error) {
      return
    }
  }

  const handleCheckMatchAll = () => {
    try {
      const check = document.querySelectorAll(`.${styles.card}`);

      if (check.length === 0) {
        setIsReady(false);
        setTimeout(() => {
          handleFlipAll();
          props.handleFinishGame();
        }, 1000);
      }
    } catch (error) {
      return
    }
  }

  const handleResetGame = () => {
    setIsReady(false);
    handleFlipAll();

    setTimeout(() => {
      setCards([]);
      setSelectCards({ selectIndex: null, selectCards: [] });
      setIsReady(true);
    }, 1000);
  }

  useEffect(() => {
    if (cards.length === 0) {

      setCards(shuffle(constant.cards.split(',')));
      setIsReady(true);
    }
  }, [cards])

  useImperativeHandle(ref, () => ({
    handleResetGame,
  }));

  if (cards.length === 0) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      {!isReady && <Loading />}
      {
        cards.map((number, index) => (
          <Card
            key={`card-${index}`}
            index={index}
            onClick={handleSelectCard}
            number={number}
            status={selectCards.selectCards[index]}
          />
        ))
      }
    </div>
  );
});
