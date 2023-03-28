'use client'
import InfoAndSearchLayout from './infoAndSearchLayout'
import styles from './searchJob.module.css'
import Link from 'next/link'
import { useLanguage } from '../../language'

//const shiftedJobInfo = [null, ...likedJobs.slice()] //för att jobbAPI ska börja på 1 ist för 0

export default function JobInfoAndSearch({ params: { id } }) {
  const likedJobs = JSON.parse(localStorage.getItem('savedJobs')) || []
  const shiftedJobInfo = [null, ...likedJobs.slice()] //för att jobbAPI ska börja på 1 ist för 0
  const job = shiftedJobInfo[id]
  const { text } = useLanguage('swe')

  if (!job) {
    return (
      <div className={styles.errorHandel}>
        <p>{text.error}</p>
        <Link href="/matchJob">{text.backMatched}</Link>
      </div>
    )
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
