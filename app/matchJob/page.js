/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import styles from './matchJob.module.css'
import MatchedJobs from './matchedJobs'
import { BsChevronDown } from 'react-icons/bs'
import Link from 'next/link'
import jobInfo from '../jobAPI'
import { useLanguage } from '../language'

export default function matchJobList() {
  const { text } = useLanguage('swe')

  return (
    <div
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
          {jobInfo.map((match) => (
            <MatchedJobs key={match.id} {...match} />
          ))}
        </div>
        <div className={styles.matchListArrowContainer}>
          <Link href="/">
            <div className={styles.backToSwipe}>
              <BsChevronDown
                style={{ color: 'black', fontSize: '1.5rem', rotate: '90deg' }}
              />
              <p>{text.swipeMore}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
