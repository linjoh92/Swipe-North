/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import styles from './matchJob.module.css'
import MatchedJobs from './matchedJobs'
import SuperLikedJobs from './superLikeJob'
import Link from 'next/link'
import { useLanguage } from '../language'
import React, { useState } from 'react'

export default function matchJobList() {
  const { text } = useLanguage('swe')

  const [likedJobs, setLikedJobs] = useState(
    JSON.parse(localStorage.getItem('savedJobs')) || []
  )

  const [superLike, setSuperLike] = useState(
    JSON.parse(localStorage.getItem('superLike')) || []
  )

  const updateJobList = (jobs) => {
    setLikedJobs(jobs)
  }

  const updateSuperLikeList = (jobs) => {
    setSuperLike(jobs)
  }

  const handleClear = () => {
    localStorage.removeItem('savedJobs')
    localStorage.removeItem('superLike')
    localStorage.removeItem('like')
    localStorage.removeItem('dislike')
    setLikedJobs([])
    setSuperLike([])
  }

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
  )
}
