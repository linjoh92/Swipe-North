'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import styles from './appliedJobs.module.css'
import AppliedJobs from './appliedJobs'
import Link from 'next/link'
import { useLanguage } from '../language'
import { useState } from 'react'

export default function MatchJobList() {
  const { text } = useLanguage('swe')
  const [appliedJobs, setAppliedJobs] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('appliedJobs')) || []
    } else {
      return []
    }
  })

  const handleClear = () => {
    localStorage.removeItem('appliedJobs')
    setAppliedJobs([])
  }

  return (
    <div className={styles.listContainer}>
      <div className={styles.matchListContainer}>
        <div className={styles.matchadeListNavBar}>
          <Link href={'/matchJob'}>
            <p className={styles.matchedNavBar}>{text.match}</p>
          </Link>
          <p className={styles.searchedNavBar}>{text.searched}</p>
        </div>
        <div>
          {appliedJobs.map((match) => (
            <AppliedJobs key={match.id} {...match} />
          ))}
        </div>
        <div className={styles.clearMatches}>
          <div className={styles.clearButton} onClick={handleClear}>
            {text.clearApplied}
          </div>
        </div>
      </div>
    </div>
  )
}
