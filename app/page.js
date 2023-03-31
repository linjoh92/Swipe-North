'use client';
import { useState, useEffect } from 'react';
import LikeBar from './LikeBar';
import styles from './page.module.css';
import SwipeCard from './swipeCardLayout';
import jobInfo from './JobAPI';

export default function Home() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [viewedJobs, setViewedJobs] = useState([]);
  const [jobAPI, setJobAPI] = useState(shuffle(jobInfo));

  const filteredJobs = jobAPI.filter((job) => !viewedJobs.includes(job));
  const currentJob = filteredJobs[currentJobIndex];

  useEffect(() => {
    const handleStorage = () => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('test', 'testValue');
      }
    };

    handleStorage();
  }, []);

  const handleSwipe = (direction, isSuperLike) => {
    if (typeof window === 'undefined') return;

    const jobToSave = filteredJobs[currentJobIndex]
    const savedJobs = JSON.parse(window.localStorage.getItem('savedJobs')) || []
    const superLikedJobs = JSON.parse(window.localStorage.getItem('superLike')) || []

    if (isSuperLike && !superLikedJobs.some((job) => job.id === jobToSave.id)) {
      window.localStorage.setItem(
        'superLike',
        JSON.stringify([...superLikedJobs, jobToSave])
      )
    } else if (
      direction === 'up' &&
      !savedJobs.some((job) => job.id === jobToSave.id)
    ) {
      window.localStorage.setItem(
        'savedJobs',
        JSON.stringify([...savedJobs, jobToSave])
      )
    } else {
      const storageKey = direction === 'left' ? 'like' : 'dislike'
      const storageItems = JSON.parse(window.localStorage.getItem(storageKey)) || []
      if (!storageItems.some((job) => job.id === jobToSave.id)) {
        window.localStorage.setItem(
          storageKey,
          JSON.stringify([...storageItems, jobToSave])
        )
      }
      const updatedJobAPI = jobAPI.filter((job) => job.id !== jobToSave.id)
      setJobAPI(updatedJobAPI)
      setCurrentJobIndex((prevIndex) => prevIndex % updatedJobAPI.length)
    }
    setViewedJobs((prevJobs) => [...prevJobs, currentJob])
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % filteredJobs.length)
  }

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
    )
}