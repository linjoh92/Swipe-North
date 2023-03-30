'use client'
import React, { useState } from 'react'
import LikeBar from './likeBar'
import styles from './page.module.css'
import SwipeCard from './swipeCardLayout'
import jobInfo from './jobAPI'

export default function Home() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [viewedJobs, setViewedJobs] = useState([])
  const [jobAPI, setJobAPI] = useState(jobInfo)

  const filteredJobs = jobAPI.filter((job) => !viewedJobs.includes(job))
  const currentJob = filteredJobs[currentJobIndex]

  const handleSwipe = (direction, isSuperLike) => {
    if (isSuperLike) {
      const superLikedJobs = JSON.parse(localStorage.getItem('superLike')) || []
      localStorage.setItem(
        'superLike',
        JSON.stringify([...superLikedJobs, filteredJobs[currentJobIndex]])
      )
    } else if (direction === 'left') {
      const updatedJobAPI = [
        ...jobAPI.slice(0, currentJobIndex),
        ...jobAPI.slice(currentJobIndex + 1),
      ]
      setJobAPI(updatedJobAPI)
      setCurrentJobIndex((prevIndex) => prevIndex % updatedJobAPI.length)
    } else if (direction === 'up') {
      const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || []
      localStorage.setItem(
        'savedJobs',
        JSON.stringify([...savedJobs, filteredJobs[currentJobIndex]])
      )
    }
    setViewedJobs((prevJobs) => [...prevJobs, currentJob])
    setCurrentJobIndex((prevIndex) => (prevIndex + 1) % filteredJobs.length)
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
        onNext={() => handleSwipe('left', false)}
      />
    </section>
  )
}
