import styles from './appliedJobs.module.css'
import AppliedJobs from './appliedJobs'
import Link from 'next/link'
import jobInfo from '../jobAPI'

export default function matchJobList() {
  const appliedJobs = jobInfo.slice(5, 8); 

  return (
    <div style={{ backgroundColor:'#e6e6e6', height: '100%'}}>
      <div className={styles.matchListContainer}>
        <div className={styles.matchadeListNavBar}>
          <Link href={'/matchJob'}><p className={styles.matchedNavBar}>Matchade jobb</p></Link>
          <p className={styles.searchedNavBar}>Sökta jobb</p>
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

