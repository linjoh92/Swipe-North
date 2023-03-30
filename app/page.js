import { useState } from 'react';
import { useClient } from 'react-server-dom-webpack';
import LikeBar from './LikeBar';
import styles from './page.module.css';
import SwipeCard from './swipeCardLayout';
import jobInfo from './JobAPI';
import dynamic from 'next/dynamic';

const ClientSideComponent = dynamic(
  () => import('./ClientSideComponent'),
  { ssr: false }
);

function Home() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [viewedJobs, setViewedJobs] = useState([]);
  const [jobAPI, setJobAPI] = useState(shuffle(jobInfo));

  const filteredJobs = jobAPI.filter((job) => !viewedJobs.includes(job));
  const currentJob = filteredJobs[currentJobIndex];

  const handleSwipe = (direction, isSuperLike) => {
    // ... (rest of the code remains the same)
  };

  function shuffle(array) {
    // ... (rest of the code remains the same)
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
        <ClientSideComponent onSwipe={handleSwipe} />
      </main>
      <LikeBar
        onLike={() => handleSwipe('up', false)}
        onSuperLike={() => handleSwipe('up', true)}
        onNext={() => handleSwipe('down', false)}
      />
    </section>
  );
}

export default useClient(Home);
