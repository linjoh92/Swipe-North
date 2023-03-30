import React from 'react'
import styles from './loading.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Loading = () => {
  return (
    <div className={styles.loadingDiv}>
      <div className={styles.firstContainer}>
        <Image
          src="/image/skelleftea_ONLY_DOT_black.svg"
          alt="black_Dot"
          width={39.5}
          height={40}
          priority={true}
        />
      </div>

      <Link href="/" className={styles.secondContainer}>
        <Image
          src="/image/SWIPE_NORTH_logo_BW_shadow.svg"
          alt="Swipe North Logo"
          width={177.85}
          height={150}
          priority={true}
        />
      </Link>

      <div className={styles.thirdContainer}>
        <Image
          src="/image/skelleftea_logo_NO_DOT_black.svg"
          alt="skelleftea_logo"
          width={108}
          height={58}
          priority={true}
        />
      </div>

      <div className={styles.loadingContainer}>
        <div className={styles.container}>
          <div className={styles.spinner}></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
