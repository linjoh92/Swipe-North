import './globals.css'
import { FaHeart } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import styles from './headerLikeBar.module.css'
import superLike from '../public/image/superLikeIcon.svg'
import Image from 'next/image'

const LikeBar = ({ onLike, onSuperLike, onNext }) => {
  const handleSuperLike = () => {
    if (onSuperLike) {
      onSuperLike(true)
    }
  }

  return (
    <div className={styles.likeBarContainer}>
      <div className={styles.btnContainer}>
        <div className={styles.superLikeConatiner} onClick={handleSuperLike}>
          <Image src={superLike} alt="SuperLike" width={35} height={35} />
        </div>
        <div className={styles.likeConatiner} onClick={onLike}>
          <FaHeart style={{ fontSize: '2.8rem' }} />
        </div>
        <div className={styles.closeConatiner} onClick={onNext}>
          <IoIosClose style={{ fontSize: '4rem' }} />
        </div>
      </div>
    </div>
  )
}

export default LikeBar
