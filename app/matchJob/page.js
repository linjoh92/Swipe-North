'use client';
import styles from './matchJob.module.css';
import Link from 'next/link';
import { useLanguage } from '../language';
import { useState } from 'react';
import MatchedJobs from './matchedJobs';
import SuperLikedJobs from './superLikeJob';

export default function MatchJobList() {
  const { text } = useLanguage('swe');

  const [likedJobs, setLikedJobs] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('savedJobs')) || [];
    } else {
      return [];
    }
  });

  const [superLike, setSuperLike] = useState(() => {
    if (typeof window !== 'undefined') {
      const superLikeData = JSON.parse(localStorage.getItem('superLike'));
      return superLikeData !== null ? superLikeData : [];
    } else {
      return [];
    }
  });
  

  const updateJobList = (jobs) => {
    setLikedJobs(jobs);
  };

  const updateSuperLikeList = (jobs) => {
    setSuperLike(jobs);
  };

  const handleClear = () => {
    localStorage.removeItem('savedJobs');
    localStorage.removeItem('superLike');
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
        <div className={styles.listContent}>
          <div>
            {superLike.map((superLikeItem) => (
              <SuperLikedJobs
                key={superLikeItem.id}
                {...superLikeItem}
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
