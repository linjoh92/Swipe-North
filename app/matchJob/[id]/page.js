import machedJobInfoApi from './jobAPI'
import InfoAndSearchLayout from './infoAndSearchLayout'
import styles from './searchJob.module.css'
import Link from 'next/link';

export default function JobInfoAndSearch({ params: { id } }) {
  const job = machedJobInfoApi[id];

  if (!job) {
    return <div className={styles.errorHandel}><p>Job not found</p><Link href='/'>Back to swipe</Link> </div>;
  }

  return (
    <InfoAndSearchLayout
      image={job.image}
      rubrik={job.rubrik}
      titel={job.titel}
      info={job.info}
      type={job.type}
      days={job.days}
      link={job.link}
    />
  )
}