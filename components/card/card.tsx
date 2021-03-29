import React, { useState, useEffect } from 'react';

import styles from './card.module.scss';

import { shuffle } from '../../shared/shuffle';

type propsCardTypes = {
  number: number,
  onClick: (index: number) => void,
  index: number,
  status: 'compare' | 'success' | null
};
type propsCardsTypes = {
  handleCount: () => void,
};

const dummyCard = [1, 2, 3, 4, 5, 6]

function Card(props: propsCardTypes) {
  return (
    <div className={styles.boxCard} onClick={() => props.onClick(props.index)}>
      <div id={`card-${props.index}`} className={styles.card}>
        <div className={styles.back} />
        <div className={styles.front} id={`card-number-${props.index}`} />
      </div>
    </div>
  );
}

export default function Cards(props: propsCardsTypes) {
  const [cards, setCards] = useState<Array<number>>([]);
  const [selectCards, setSelectCards] = useState<{ selectIndex: null | number, selectCards: Array<'compare' | 'success' | null> }>({ selectIndex: null, selectCards: [] });
  const [isReady, setIsReady] = useState<boolean>(true)

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
          } else { // not match
            handleFlipCard(index);
            setIsReady(false); // set this value for can not click card before card is not finish flip

            setTimeout(() => { // set timeout for flip card not match
              console.log('timeout>>')
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
      const cardFront = document.getElementById(`card-number-${index}`)
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

  useEffect(() => {
    if (cards.length === 0) {
      setCards([...shuffle(dummyCard), ...shuffle(dummyCard)]);
    }
  }, [cards])

  if (cards.length === 0) {
    return (<div>loading...</div>);
  }

  return (
    <div className={styles.container}>
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
  )
}
