import React from 'react'
import TinderCard from 'react-tinder-card'
import { motion } from 'framer-motion'
import { MdInfoOutline } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import { useLanguage } from './language'
import Modal from './modal.jobInfo'
import { atom, useAtom } from 'jotai'

// Define the likedJobsAtom to manage liked job state
const likedJobsAtom = atom([])

export default function SwipeCard(props) {
    // Destructure props to get job information
  const { id, imgUrl, companyName, jobTitle, shortInfo, days, type, link } = props
  const { text } = useLanguage('swe')
  const [showModal, setShowModal] = React.useState(false)
    // Use the likedJobsAtom to manage liked jobs state
  const [likedJobs, setLikedJobs] = useAtom(likedJobsAtom)

    // Function to handle swiping the card
  const swiped = (direction) => {
    console.log('Swiped', direction)
    props.onSwipe(direction)
  }  

    // Function to handle when the card is out of the frame
  const outOfFrame = (job) => {
    console.log(job.title, 'left the screen!')
  }
  // Function to handle opening the job information modal
  const handleClick = () => {
    setShowModal(true)
  }

  // Check if the job is liked
  const isJobLiked = likedJobs.includes(id)

    // Function to handle liking and unliking jobs
  const handleLike = () => {
    const newLikedJobs = isJobLiked
      ? likedJobs.filter((jobId) => jobId !== id)
      : [...likedJobs, id]
    setLikedJobs(newLikedJobs)
    localStorage.setItem('savedJobs', JSON.stringify(newLikedJobs))
  }

  return (
    <div className="swipe-card-container">
      {showModal && (
        <>
          <motion.div
            className="overlay"
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
      <TinderCard
        className="swipe-card"
        onSwipe={(dir) => swiped(dir)}
        onCardLeftScreen={() => outOfFrame(props)}
      >
        <div
          className="card"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <button
            className={`heart-button${isJobLiked ? ' liked' : ''}`}
            onClick={handleLike}
          >
            <span className="heart-icon"></span>
          </button>

          <motion.div
            className="upp-arrow"
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

              {/* job info container */}
          <div className="info-container" onClick={handleClick}>
            <h2>
              {companyName}
              <MdInfoOutline />
            </h2>
            <p>{jobTitle}</p>
          </div>
        </div>
      </TinderCard>
    </div>
  )
}
