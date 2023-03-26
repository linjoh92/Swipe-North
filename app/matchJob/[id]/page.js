import InfoAndSearchLayout from './infoAndSearchLayout'
import styles from './searchJob.module.css'
import Link from 'next/link'
import jobInfo from '../../jobAPI'

const shiftedJobInfo = [null, ...jobInfo.slice()] //för att jobbAPI ska börja på 1 ist för 0

export default function JobInfoAndSearch({ params: { id } }) {
  const job = shiftedJobInfo[id]

  if (!job) {
    return (
      <div className={styles.errorHandel}>
        <p>Hittade ingen jobbinfo</p>
        <Link href="/matchJob">Tillbaka till Matchade jobb</Link>{' '}
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
