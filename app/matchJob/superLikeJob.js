'use client'
import styles from './matchJob.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FaTrashAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import superLikeImg from '../../public/image/superLikeIcon.svg'

export default function SuperLikedJobs(props) {
  const { id, imgUrl, companyName, jobTitle, type, updateSuperLikeList } = props

  const handleDelete = () => {
    const superLike = JSON.parse(localStorage.getItem('superLike'))
    const jobIndex = superLike.findIndex((job) => job.id === id)
    superLike.splice(jobIndex, 1)
    localStorage.setItem('superLike', JSON.stringify(superLike))
    updateSuperLikeList(superLike)
  }

  const handleApply = () => {
    const superLike = JSON.parse(localStorage.getItem('superLike'))
    const jobIndex = superLike.findIndex((job) => job.id === id)
    const appliedJob = superLike[jobIndex]
    superLike.splice(jobIndex, 1)
    localStorage.setItem('superLike', JSON.stringify(superLike))
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || []
    appliedJobs.push(appliedJob)
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs))
    updateSuperLikeList(superLike)
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
          <h2>
            {companyName}
            <Image
              src={superLikeImg}
              alt="SuperLike"
              width={20}
              height={20}
              className={styles.superLikeStar}
            />
          </h2>
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
