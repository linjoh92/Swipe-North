'use client'
import styles from './matchJob.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '../language'
import { saveToStorage, getFromStorage } from '../storage'

export default function MatchedJobs(props) {
  const { id, imgUrl, companyName, jobTitle, type, updateSavedJobsList } = props
  const { text } = useLanguage('swe')

  const handleDelete = () => {
    const savedJobs = getFromStorage('savedJobs')
    const jobIndex = savedJobs.findIndex((job) => job.id === id)
    savedJobs.splice(jobIndex, 1)
    saveToStorage('savedJobs', savedJobs)
    updateSavedJobsList(savedJobs)
  }

  const handleApply = () => {
    const savedJobs = getFromStorage('savedJobs')
    const jobIndex = savedJobs.findIndex((job) => job.id === id)
    const appliedJob = savedJobs[jobIndex]
    savedJobs.splice(jobIndex, 1)
    saveToStorage('savedJobs', savedJobs)

    const appliedJobs = getFromStorage('appliedJobs') || []
    appliedJobs.push(appliedJob)
    saveToStorage('appliedJobs', appliedJobs)
    updateSavedJobsList(savedJobs)
  }

  return (
    <motion.div
      className={styles.matchedContainer}
      whileHover={{ scale: 1.02 }}
      drag="x"
      dragConstraints={{ left: -135, right: 0, dragElastic: 0.2 }}
    >
      <Image
        src={imgUrl}
        alt="photo-job"
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

      <motion.div className={styles.deliteOrAppliedConatiner}>
        <motion.div
          className={styles.delite}
          whileHover={{ color: '#721904' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
        >
          <FaTrashAlt style={{ fontSize: '1rem' }} /> {text.delete}
        </motion.div>
        <motion.div
          className={styles.applied}
          whileHover={{ color: '#7B932E' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleApply}
        >
          <AiFillCheckCircle style={{ fontSize: '1.2rem' }} /> {text.applied}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
