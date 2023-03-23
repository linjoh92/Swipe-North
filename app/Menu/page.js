import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MdSwipeUp } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineLanguage } from 'react-icons/md'
import { ImShare2 } from 'react-icons/im'

const menu = () => {
  return (
    <div className={styles.menuConatianer}>
      <div className={styles.logoConatiner}>
        <Image
          src="/image/SWIPE_NORTH_logo_black.svg"
          alt="logo"
          width={93}
          height={83}
        />
      </div>

      <div className={styles.menuListConatiner}>
        <div className={styles.menuList}>
          <div className={styles.menuOption}>
            <MdSwipeUp style={{ fontSize: '1.3rem' }} />
            <p>Swipa jobb</p>
          </div>
          <div className={styles.menuOption}>
            <FaHeart style={{ fontSize: '1.2rem' }} />
            <p>Matcha jobb</p>
          </div>
        </div>

        <div className={styles.menuList}>
          <div className={styles.menuOption}>
            <MdOutlineLanguage style={{ fontSize: '1.3rem' }} />
            <p>Språk</p>
            <div className={styles.flagContainer}>
              <Image
                src={'/..//image/eng.svg'}
                alt="eng-flag"
                width={16}
                height={16}
                className={styles.engFlag}
              />
              <Image
                src={'/..//image/swe.svg'}
                alt="eng-flag"
                width={16}
                height={16}
                className={styles.sweFlag}
              />
            </div>
          </div>
          <div className={styles.menuOption}>
            <ImShare2 style={{ fontSize: '1rem' }} />
            <Link href="">Dela</Link>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h2>SWIPE NORTH</h2>
        <p>
          Swipe North äe en revolutionerande app som gör det enklare än nägonsin
          söka jobb i Skelleftå.
        </p>

        <p>
          Med en liknande funktionalitet som den populära dating-appen Tinder,
          är det nu möjligt att enkelt söka jobb och nätverka med företag och
          rekryterare på ett sätt som är enkelt, kul och intuitivt.
        </p>
      </div>
    </div>
  )
}

export default menu
