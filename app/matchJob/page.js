/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import styles from './matchJob.module.css'
import MatchedJobs from './matchedJobs'
import Link from 'next/link'
import { useLanguage } from '../language'
import React, { useState } from 'react'

export default function matchJobList() {
  const { text } = useLanguage('swe')
  const [likedJobs, setLikedJobs] = useState(
    JSON.parse(localStorage.getItem('savedJobs')) || []
  )

  const handleClear = () => {
    localStorage.removeItem('savedJobs')
    setLikedJobs([])
  }

  const updateJobList = (jobs) => {
    setLikedJobs(jobs)
  }

  return (
    <div
      className={styles.listContainer}
      style={{
        backgroundColor: '#e6e6e6',
        height: '100%',
        top: '100px',
        minHeight: 'calc(100vh - 124px)',
        position: 'absolute',
        left: '0',
        right: '0',
      }}
    >
      <div className={styles.matchListContainer}>
        <div className={styles.matchadeListNavBar}>
          <p className={styles.matchedNavBar}>{text.match}</p>
          <Link href="/appliedJobs">
            <p className={styles.searchedNavBar}>{text.searched}</p>
          </Link>
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
  )
}
