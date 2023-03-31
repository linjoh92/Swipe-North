import { useState, useEffect } from 'react';
import LikeBar from './LikeBar';
import SwipeCard from './swipeCardLayout';
import jobInfo from './JobAPI';
import styles from './page.module.css';

function ClientSideComponent() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [viewedJobs, setViewedJobs] = useState([]);
  const [jobAPI, setJobAPI] = useState(shuffle(jobInfo));

  const filteredJobs = jobAPI.filter((job) => !viewedJobs.includes(job));
  const currentJob = filteredJobs[currentJobIndex];

  const handleSwipe = (direction, isSuperLike) => {
    // ...
  };

  // Helper function to shuffle jobAPI array randomly
  function shuffle(array) {
    // ...
  }

  return (
    <section className={styles.homeContainer}>
      <main className={styles.main}>
        <div className={styles.swipeJobCard}>
          <h3>Response #{currentJobIndex + 1}</h3>
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

export default ClientSideComponent;
