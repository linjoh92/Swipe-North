import LikeBar from './likeBar'
import styles from './page.module.css'
import Filter from './Filter'

export default function Home() {
  return (
    <>
      <Filter />
      <main className={styles.main}>
        <div className={styles.swipeCard}>Swipa jobb</div>
      </main>
      <LikeBar />
    </>
  )
}
