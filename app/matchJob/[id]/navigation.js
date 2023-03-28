import Link from 'next/link'
import styles from './searchJob.module.css'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

export default function Navigation({ id }) {
  const likedJobs = JSON.parse(localStorage.getItem('savedJobs')) || []
  const activeNumber = parseInt(id, 10)

  const activeIndex = likedJobs.findIndex(
    (job) => parseInt(job.id, 10) === activeNumber
  )
  const prevNumber = likedJobs[activeIndex - 1]
  const nextNumber = likedJobs[activeIndex + 1]

  return (
    <>
      <div className={styles.arrowContainer}>
        {prevNumber !== undefined && (
          <Link href={`/matchJob/${prevNumber.id}`}>
            <BsChevronLeft
              className={`${styles.arrow} ${
                activeNumber === 0 ? styles.show : ''
              }`}
            />
          </Link>
        )}

        {nextNumber !== undefined && (
          <Link
            href={`/matchJob/${nextNumber.id}`}
            className={styles.arrowRightFirstJob}
          >
            <BsChevronRight
              className={`${styles.arrow} ${
                nextNumber === likedJobs.length ? styles.hide : ''
              }`}
            />
          </Link>
        )}
      </div>
    </>
  )
}
