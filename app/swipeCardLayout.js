'use client'
import styles from './page.module.css';
import Image from 'next/image';
import motionIcon from '/public/image/logo_icon_moatin_white.svg';
import { useState } from 'react';
import { MdInfoOutline } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useLanguage } from './language';
import Modal from './modal.jobInfo';  

export default function SwipeCard(props) {
  const { image, rubrik, titel, info, days, type } = props;
  const [showModal, setShowModal] = useState(false);
  const { text } = useLanguage('swe');

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className={styles.swipeCardConatiner}>
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
            type={type}
            text={text}
            setShowModal={setShowModal}
          />
         </>
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
          <h2>{rubrik}<MdInfoOutline /></h2>
          <p>{titel}</p>
        </div>
      </div>
    </div>
  );
}



