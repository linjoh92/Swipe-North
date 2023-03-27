import Link from 'next/link'
import styles from './searchJob.module.css'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'

export default function Layout({ children, params }) {
  const activeNumber = parseInt(params.id, 10)
  const prevNumber = activeNumber > 1 ? activeNumber - 1 : undefined
  const nextNumber = activeNumber < 8 ? activeNumber + 1 : undefined

  return (
    <>
      {children}
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
                activeNumber === 8 ? styles.hide : ''
              }`}
            />
          </Link>
        )}
      </div>
    </>
  )
}
