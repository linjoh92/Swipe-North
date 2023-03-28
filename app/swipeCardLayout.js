'use client'
import styles from './page.module.css'
import { useState } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from './language'
import Modal from './modal.jobInfo'
import { atom, useAtom } from 'jotai'

const likedJobsAtom = atom([])

export default function SwipeCard(props) {
  const { id, image, rubrik, titel, info, days, type, link } = props
  const [showModal, setShowModal] = useState(false)
  const { text } = useLanguage('swe')
  const [likedJobs, setLikedJobs] = useAtom(likedJobsAtom)

  const handleClick = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const isJobLiked = likedJobs.some((job) => job.id === id)
  const handleLike = () => {
    const newJob = { id, image, rubrik, titel, info, days, type, link }
    if (isJobLiked) {
      const newLikedJobs = likedJobs.filter((job) => job.id !== id)
      setLikedJobs(newLikedJobs)
      localStorage.setItem('savedJobs', JSON.stringify(newLikedJobs))
    } else {
      setLikedJobs([...likedJobs, newJob])
      localStorage.setItem('savedJobs', JSON.stringify([...likedJobs, newJob]))
    }
    setIsLiked(!isJobLiked)
  }

  const [isLiked, setIsLiked] = useState(isJobLiked)

  return (
    <div className={styles.swipeContainer}>
      {showModal && (
        <>
          <motion.div
            className={styles.overlay}
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowModal(false)}
          />
          <Modal
            image={image}
            rubrik={rubrik}
            titel={titel}
            info={info}
            days={days}
            id={id}
            type={type}
            link={link}
            text={text}
            setShowModal={setShowModal}
          />
        </>
      )}
      <div className={styles.swipeCardConatiner}>
        <div
          className={styles.swipeCard}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div
            className={isLiked ? styles.likeButtonLiked : styles.likeButton}
            onClick={handleLike}
          >
            <span>
              {isLiked ? (
                <FaHeart fill="#ffffff" />
              ) : (
                <FaHeart
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="40"
                  style={{ width: '35px' }}
                />
              )}
            </span>
          </div>

          <motion.div
            style={{ width: '100%', justifyContent: 'center' }}
            animate={{ y: -7 }}
            transition={{ type: 'spring', repeat: Infinity, repeatDelay: 2 }}
          >
            <BsChevronDown
              style={{
                fontSize: '3rem',
                color: 'white',
                rotate: '180deg',
                width: '100%',
              }}
            />
          </motion.div>

          <div className={styles.infoConatiner} onClick={handleClick}>
            <h2>
              {rubrik}
              <MdInfoOutline />
            </h2>
            <p>{titel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
