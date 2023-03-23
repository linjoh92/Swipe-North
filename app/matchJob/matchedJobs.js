import styles from './matchJob.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function MatchedJobs(props) {
  const { number, image, rubrik, titel, type } = props

  return (
    <div className={styles.matchedContainer}>
      <Image
        src={image}
        alt="jobb"
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.textConatiner}>
        <Link href={`/matchJob/${number}`}>
          <h2>{rubrik}</h2>
        </Link>
        <p>{titel}</p>
        <p>{type}</p>
      </div>
    </div>
  )
}
