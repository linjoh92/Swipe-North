import LikeBar from './likeBar'
import styles from './page.module.css'
import SwipeCard from './swipeCardLayout'
import jobInfo from './jobAPI'

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <main className={styles.main}>
        <div className={styles.swipeJobCard}>
          {jobInfo.map((job) => (
            <SwipeCard key={job.id} {...job} />
          ))}
        </div>
      </main>
      <LikeBar />
    </section>
  )
}
