import styles from './page.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdWorkHistory } from 'react-icons/md'

export default function Modal(props) {
  const { image, rubrik, titel, info, days, type, text, setShowModal } = props

  return (
    <motion.div
      className={styles.modal}
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 60 }}
    >
      <Image
        src={image}
        alt="job-Image"
        width={227}
        height={300}
        className={styles.modalImg}
      />
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
          <p>
            {text.published}: {days} {text.days}
          </p>
        </div>
      </div>

      <div onClick={() => setShowModal(false)}>
        <BsChevronDown style={{ fontSize: '3rem', color: 'white' }} />
      </div>
    </motion.div>
  )
}
