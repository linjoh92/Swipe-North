import { FaHeart } from 'react-icons/fa'
import styles from './page.module.css'

export default function LikeButton({ isLiked, onClick }) {
  const handleLikeClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <div
      className={isLiked ? styles.likeButtonLiked : styles.likeButton}
      onClick={handleLikeClick}
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
  )
}
