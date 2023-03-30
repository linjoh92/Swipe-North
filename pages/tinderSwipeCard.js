// tinderSwipeCard.js
import React from 'react';
import TinderCard from 'react-tinder-card';
import styles from './swipe.module.css';
import Image from 'next/image';

const TinderSwipeCard = ({ job }) => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  return (
    <div className={styles.swipeCardContainer}>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen(job.id)}
        className={styles.swipeCard}
      >
        <Image src={job.imgUrl} alt={job.jobTitle} className={styles.image} />
        <div className={styles.infoConatiner}>
          <h2>{job.companyName}</h2>
          <h3>{job.jobTitle}</h3>
          <p>{job.shortInfo}</p>
        </div>
      </TinderCard>
    </div>
  );
};

export default TinderSwipeCard;
