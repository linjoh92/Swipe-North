'use client'
import InfoAndSearchLayout from './infoAndSearchLayout'
import styles from './searchJob.module.css'
import Link from 'next/link'
import { useLanguage } from '../../language'
import Navigation from './navigation'

export default function JobInfoAndSearch({ params: { id } }) {
  const likedJobs = JSON.parse(localStorage.getItem('savedJobs')) || []
  const job = likedJobs.find((job) => job.id === id)

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
    <>
      <InfoAndSearchLayout
        imgUrl={job.imgUrl}
        companyName={job.companyName}
        jobTitle={job.jobTitle}
        shortInfo={job.shortInfo}
        type={job.type}
        days={job.days}
        link={job.link}
      />
      <Navigation id={job.id} />
    </>
  )
}
