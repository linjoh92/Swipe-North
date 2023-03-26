import LikeBar from './likeBar'
import styles from './page.module.css'
import Filter from './filter'
import SwipeCard from './swipeCardLayout'
import jobInfo from './jobAPI'

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <Filter />
      <main className={styles.main}>
      <div>
        {jobInfo.map((job) => (
          <SwipeCard key={job.id} {...job} />
        ))}
      </div>
      </main>
      <LikeBar />
    </section>
  )
}
