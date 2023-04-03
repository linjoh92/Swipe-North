'use client';
import React, { useState } from 'react';
import LikeBar from './LikeBar';
import styles from './page.module.css';
import jobInfo from './JobAPI';
import { saveToStorage, getFromStorage } from './storage';
//import dynamic from 'next/dynamic';
import SwipeCard from './swipeCardLayout';

//const SwipeCard = dynamic(() => import('./swipeCardLayout'), { ssr: false });

export default function Home() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [viewedJobs, setViewedJobs] = useState([]);
  const [jobAPI, setJobAPI] = useState(shuffle(jobInfo));

  const filteredJobs = jobAPI.filter((job) => !viewedJobs.includes(job));
  const currentJob = filteredJobs[currentJobIndex];

  const handleSwipe = (direction, isSuperLike) => {
    const jobToSave = filteredJobs[currentJobIndex];
    const savedJobs = getFromStorage('savedJobs') || [];
    const superLikedJobs = getFromStorage('superLike') || [];

    if (isSuperLike && !superLikedJobs.some((job) => job.id === jobToSave.id)) {
      saveToStorage('superLike', [...superLikedJobs, jobToSave]);
    } else if (
      direction === 'up' &&
      !savedJobs.some((job) => job.id === jobToSave.id)
    ) {
      saveToStorage('savedJobs', [...savedJobs, jobToSave]);
    } else {
      const storageKey = direction === 'left' ? 'like' : 'dislike';
      const storageItems = getFromStorage(storageKey) || [];
      if (!storageItems.some((job) => job.id === jobToSave.id)) {
        saveToStorage(storageKey, [...storageItems, jobToSave]);
      }
      const updatedJobAPI = jobAPI.filter((job) => job.id !== jobToSave.id);
      setJobAPI(updatedJobAPI);
      setCurrentJobIndex((prevIndex) => prevIndex % updatedJobAPI.length);
    }
    setViewedJobs((prevJobs) => [...prevJobs, currentJob]);
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % filteredJobs.length);
  };

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return (
    <section className={styles.homeContainer}>
      <main className={styles.main}>
        <div className={styles.swipeJobCard}>
          {currentJob && (
            <SwipeCard
              key={currentJob.id}
              {...currentJob}
              onSwipe={handleSwipe}
            />
          )}
        </div>
      </main>
      <LikeBar
        onLike={() => handleSwipe('up', false)}
        onSuperLike={() => handleSwipe('up', true)}
        onNext={() => handleSwipe('down', false)}
      />
    </section>
  );
}

