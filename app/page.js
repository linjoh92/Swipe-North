'use client';
import React, { useState } from 'react'
import LikeBar from './likeBar'
import styles from './page.module.css'
import SwipeCard from './swipeCardLayout'
import jobInfo from './jobAPI'

export default function Home() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const currentJob = jobInfo[currentJobIndex]

  const handleSwipe = (direction) => {
    setCurrentJobIndex((prevIndex) => {
      if (direction === 'right') {
        return (prevIndex + 1) % jobInfo.length;
      } else {
        return prevIndex === 0 ? jobInfo.length - 1 : prevIndex - 1;
      }
    });
  };
  
  return (
    <section className={styles.homeContainer}>
      <main className={styles.main}>
        <div className={styles.swipeJobCard}>
          {currentJob && <SwipeCard key={currentJob.id} {...currentJob} onSwipe={handleSwipe} />}
        </div>
      </main>
      <LikeBar />
    </section>
  )
}
