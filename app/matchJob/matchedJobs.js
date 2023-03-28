import styles from './matchJob.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { motion, animate } from 'framer-motion'

export default function MatchedJobs(props) {
  const { id, imgUrl, companyName, jobTitle, type, updateJobList } = props

  const handleClick = () => {
    animate({ right: 130 })
  }

  const handleDelete = () => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs'))
    const jobIndex = savedJobs.findIndex((job) => job.id === id)
    savedJobs.splice(jobIndex, 1)
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs))
    updateJobList(savedJobs)
  }

  const handleApply = () => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs'))
    const jobIndex = savedJobs.findIndex((job) => job.id === id)
    const appliedJob = savedJobs[jobIndex]
    savedJobs.splice(jobIndex, 1)
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs))
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || []
    appliedJobs.push(appliedJob)
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs))
    updateJobList(savedJobs)
  }

  return (
    <motion.div
      className={styles.matchedContainer}
      whileHover={{ scale: 1.02 }}
      drag="x"
      dragConstraints={{ left: -130, right: 0, dragElastic: 0.2 }}
    >
      <Image
        src={imgUrl}
        alt="jobb"
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.textConatiner}>
        <Link href={`/matchJob/${id}`}>
          <h2>{companyName}</h2>
        </Link>
        <p>{jobTitle}</p>
        <p>{type}</p>
      </div>

      <motion.div
        className={styles.deliteOrAppliedConatiner}
        onClick={handleClick()}
      >
        <motion.div
          className={styles.delite}
          whileHover={{ color: '#721904' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
        >
          <FaTrashAlt style={{ fontSize: '1rem' }} /> Ta bort
        </motion.div>
        <motion.div
          className={styles.applied}
          whileHover={{ color: '#7B932E' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleApply}
        >
          <AiFillCheckCircle style={{ fontSize: '1.2rem' }} /> Sökt
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
