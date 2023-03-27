'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import styles from './appliedJobs.module.css'
import AppliedJobs from './appliedJobs'
import Link from 'next/link'
import jobInfo from '../jobAPI'
import { useLanguage } from '../language';


export default function matchJobList() {
  const appliedJobs = jobInfo.slice(5, 8); 
  const { text } = useLanguage('swe');


  return (
    <div style={{ backgroundColor:'#e6e6e6', height: '100%'}}>
      <div className={styles.matchListContainer}>
        <div className={styles.matchadeListNavBar}>
          <Link href={'/matchJob'}><p className={styles.matchedNavBar}>{text.match}</p></Link>
          <p className={styles.searchedNavBar}>{text.searched}</p>
        </div>
        <div>
          {appliedJobs.map((match) => (
            <AppliedJobs key={match.id} {...match} />
          ))}
        </div>
      </div>
    </div>
  )
}

