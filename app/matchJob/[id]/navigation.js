import Link from 'next/link'
import styles from './searchJob.module.css'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

export default function Navigation({ id }) {
  const superLike = JSON.parse(localStorage.getItem('superLike')) || []
  const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || []

  // calculate the length of superLike array
  const superLikeLength = superLike.length

  const activeNumber = parseInt(id, 10)

  // adjust the index to account for the length of superLike
  const activeIndex =
    activeNumber < superLikeLength
      ? activeNumber
      : activeNumber - superLikeLength

  // determine if the active job belongs to superLike or savedJobs
  const activeArray = activeNumber < superLikeLength ? superLike : savedJobs

  const prevNumber = activeArray[activeIndex - 1]
  const nextNumber = activeArray[activeIndex + 1]

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
            href={`/matchJob/${
              activeNumber < superLikeLength
                ? nextNumber.id
                : superLikeLength + nextNumber.id // adjust the id to account for the length of superLike
            }`}
            className={styles.arrowRightFirstJob}
          >
            <BsChevronRight
              className={`${styles.arrow} ${
                activeIndex === activeArray.length - 1 ? styles.hide : ''
              }`}
            />
          </Link>
        )}
      </div>
    </>
  )
}
