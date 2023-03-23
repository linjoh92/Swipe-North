import styles from './matchJob.module.css'
import MatchedJobs from './matchedJobs'
import { BsChevronDown } from 'react-icons/bs'

export default function matchJobList() {
  const machedJobInfo = [
    {
      number: '1',
      image: '/./image/Swipekort_1.png',
      rubrik: 'Skellefteå taxi',
      titel: 'Taxichaufför',
      type: 'Deltid',
    },
    {
      number: '2',
      image: '/./image/Swipekort_2.png',
      rubrik: 'Northvolt',
      titel: 'Gruppchef',
      type: 'Heltid',
    },
    {
      number: '3',
      image: '/./image/Swipekort_3.png',
      rubrik: 'Skellefteå Lasarett',
      titel: 'Sjuksköterska',
      type: 'Timanställning',
    },
    {
      number: '4',
      image: '/./image/Swipekort_5.png',
      rubrik: 'Skellefteå taxi',
      titel: 'Taxichaufför',
      type: 'Heltid',
    },
    {
      number: '5',
      image: '/./image/Swipekort_4.png',
      rubrik: 'Skellefteå Kommun',
      titel: 'Förskolepedagog',
      type: 'Deltid',
    },
  ]

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
        <BsChevronDown style={{ color: 'black', fontSize: '2.5rem' }} />
      </div>
    </div>
  )
}
