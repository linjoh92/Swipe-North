import styles from './matchJob.module.css'
import MatchedJobs from './matchedJobs'
import { BsChevronDown } from 'react-icons/bs'
import Link from 'next/link'
import machedJobInfo from '../JobAPI'

export default function matchJobList() {
  return (
    <div className={styles.matchListContainer}>
      <div className={styles.matchadeListNavBar}>
        <p className={styles.matchedNavBar}>Matchade jobb</p>
        <p className={styles.searchedNavBar}>Sökta jobb</p>
      </div>
      <div>
        {machedJobInfo.map((match) => (
          <MatchedJobs key={match.id} {...match} />
        ))}
      </div>
      <div className={styles.matchListArrowContainer}>
        <Link href="/">
          <div className={styles.backToSwipe}>
            <BsChevronDown
              style={{ color: 'black', fontSize: '1.5rem', rotate: '90deg' }}
            />
            <p>Swipea mer</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
