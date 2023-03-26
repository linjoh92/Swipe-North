'use client'
import styles from './page.module.css'
import Image from 'next/image'
import motionIcon from '/public/image/logo_icon_moatin_white.svg'
import { useState } from 'react';
import { MdInfoOutline } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdWorkHistory } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function SwipeCard(props) {
  const { image, rubrik, titel, info, days, type } = props
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <div className={styles.swipeCardConatiner}>
      {showModal && (
        <motion.div
          className={styles.overlay}
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowModal(false)}
        />
      )}
      <div className={styles.swipeCard} style={{ backgroundImage: `url(${image})` }}>
        <motion.div 
          style={{ width:'100%', justifyContent:'center' }}
          animate={{ y: -7 }}
          transition={{ type: "spring", repeat: Infinity, repeatDelay: 2}}
        >
          <BsChevronDown style={{ fontSize: '3rem', color: 'white', rotate: '180deg', width:'100%'}} />
        </motion.div>
        <div className={styles.infoConatiner} onClick={handleClick}>
          <Image src={motionIcon} alt="Icon" width={84} height={32} />
          <h2>{rubrik}<MdInfoOutline /></h2>
          <p>{titel}</p>
        </div>
      </div>

      {showModal && (
        <motion.div
          className={styles.modal}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 60 }}
        >
          <Image src={image} alt="job-Image" width={227} height={300} className={styles.modalImg} />
          <div className={styles.modalTitelConatiner}>
            <h2>{rubrik}</h2>
            <p>{titel}</p>
          </div>
          <p>{info.split('.').slice(0, 2).join('. ')}.</p>

          <div className={styles.iconAndInfoConatainer}>
            <div className={styles.iconAndInfo}>
              <MdWorkHistory style={{ color: 'white', fontSize: '1.4rem' }} />
              <p>{type}</p>
            </div>
            <div className={styles.iconAndInfo}>
              <AiOutlineClockCircle
                style={{ color: 'white', fontSize: '1.4rem' }}
              />
              <p>Publicerat: {days} dagar sedan</p>
            </div>
          </div>

          <div onClick={() => setShowModal(false)}>
            <BsChevronDown style={{ fontSize: "3rem", color: "white" }} />
          </div>   

        </motion.div>
      )}
    </div>
  )
}


