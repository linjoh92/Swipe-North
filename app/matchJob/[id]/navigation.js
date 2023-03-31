import Link from 'next/link';
import styles from './searchJob.module.css';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { getFromStorage } from '../storage';

export default function Navigation({ id }) {
  const likedJobs = getFromStorage('savedJobs') || [];
  const superLikedJobs = getFromStorage('superLike') || [];

  // Combine the superLikedJobs and likedJobs arrays
  const allJobs = superLikedJobs.concat(likedJobs);

  // Sort the combined array by the date the job was saved
  allJobs.sort((a, b) => new Date(b.dateSaved) - new Date(a.dateSaved));

  const activeNumber = parseInt(id, 10);

  const activeIndex = allJobs.findIndex(
    (job) => parseInt(job.id, 10) === activeNumber
  );
  const prevNumber = allJobs[activeIndex - 1];
  const nextNumber = allJobs[activeIndex + 1];

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
                nextNumber === allJobs.length ? styles.hide : ''
              }`}
            />
          </Link>
        )}
      </div>
    </>
  );
}
