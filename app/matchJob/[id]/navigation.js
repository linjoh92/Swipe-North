import Link from 'next/link'
import styles from './searchJob.module.css'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

export default function Navigation({ id }) {
  const likedJobs = JSON.parse(localStorage.getItem('savedJobs')) || []

  const activeNumber = parseInt(id, 10)
  const prevNumber = activeNumber > 1 ? activeNumber - 1 : undefined
  const nextNumber =
    activeNumber < likedJobs.length ? activeNumber + 1 : undefined

  return (
    <>
      <div className={styles.arrowContainer}>
        {prevNumber !== undefined && (
          <Link href={`/matchJob/${prevNumber}`}>
            <BsChevronLeft
              className={`${styles.arrow} ${
                activeNumber === 1 ? styles.show : ''
              }`}
            />
          </Link>
        )}

        {nextNumber !== undefined && (
          <Link
            href={`/matchJob/${nextNumber}`}
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
