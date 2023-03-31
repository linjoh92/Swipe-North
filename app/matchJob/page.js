'use client'
import styles from './matchJob.module.css';
import MatchedJobs from './matchedJobs';
import SuperLikedJobs from './superLikeJob';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../language';
import { saveToStorage, getFromStorage } from '../storage';

export default function MatchJobList() {
  const { text } = useLanguage('swe');

  const [likedJobs, setLikedJobs] = useState([]);
  const [superLike, setSuperLike] = useState([]);

  useEffect(() => {
    const storedLikedJobs = getFromStorage('savedJobs');
    const storedSuperLike = getFromStorage('superLike');

    if (storedLikedJobs) {
      setLikedJobs(storedLikedJobs);
    }

    if (storedSuperLike) {
      setSuperLike(storedSuperLike);
    }
  }, []);

  const updateJobList = (jobs) => {
    setLikedJobs(jobs);
  };

  const updateSuperLikeList = (jobs) => {
    setSuperLike(jobs);
  };

  const handleClear = () => {
    saveToStorage('savedJobs', []);
    saveToStorage('superLike', []);
    saveToStorage('like', []);
    saveToStorage('dislike', []);
    setLikedJobs([]);
    setSuperLike([]);
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.matchListContainer}>
        <div className={styles.matchadeListNavBar}>
          <p className={styles.matchedNavBar}>{text.match}</p>
          <Link href="/appliedJobs">
            <p className={styles.searchedNavBar}>{text.searched}</p>
          </Link>
        </div>
        <div>
          {superLike.map((superLike) => (
            <SuperLikedJobs
              key={superLike.id}
              {...superLike}
              updateSuperLikeList={updateSuperLikeList}
            />
          ))}
        </div>
        <div>
          {likedJobs.map((match) => (
            <MatchedJobs
              key={match.id}
              {...match}
              updateJobList={updateJobList}
            />
          ))}
        </div>
        <div className={styles.clearMatches}>
          <div className={styles.clearButton} onClick={handleClear}>
            {text.clear}
          </div>
        </div>
      </div>
    </div>
  );
}
