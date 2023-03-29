'use client'
import styles from './page.module.css'
import { useState } from 'react'
import { MdInfoOutline } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useLanguage } from './language'
import Modal from './modal.jobInfo'
import { atom, useAtom } from 'jotai'
import LikeButton from './likeButton'

const likedJobsAtom = atom([])

export default function SwipeCard(props) {
  const { id, imgUrl, companyName, jobTitle, shortInfo, days, type, link } =
    props
  const [showModal, setShowModal] = useState(false)
  const { text } = useLanguage('swe')
  const [likedJobs, setLikedJobs] = useAtom(likedJobsAtom)

  const handleClick = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const isJobLiked = likedJobs.some((job) => job.id === id)
  const handleLike = () => {
    const newJob = {
      id,
      imgUrl,
      companyName,
      jobTitle,
      shortInfo,
      days,
      type,
      link,
    }
    if (isJobLiked) {
      const newLikedJobs = likedJobs.filter((job) => job.id !== id)
      setLikedJobs(newLikedJobs)
      localStorage.setItem('savedJobs', JSON.stringify(newLikedJobs))
    } else {
      setLikedJobs([...likedJobs, newJob])
      localStorage.setItem('savedJobs', JSON.stringify([...likedJobs, newJob]))
    }
  }

  return (
    <div className={styles.swipeContainer}>
      {showModal && (
        <>
          <motion.div
            className={styles.overlay}
            style={{ backgroundImage: `url(${imgUrl})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowModal(false)}
          />
          <Modal
            imgUrl={imgUrl}
            companyName={companyName}
            jobTitle={jobTitle}
            shortInfo={shortInfo}
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
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <LikeButton isLiked={isJobLiked} onClick={handleLike} />

          <motion.div
            className={styles.uppArrow}
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
              {companyName}
              <MdInfoOutline />
            </h2>
            <p>{jobTitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
