'use client'

import styles from './menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { MdSwipeUp } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { ImShare2 } from 'react-icons/im';
import { useLanguage } from '../language';

const Menu = () => {
  const { language, text, toggleLanguage } = useLanguage('swe');

  return (
    <div className={styles.menuContainer}>
      <div className={styles.logoContainer}>
        <Image src="/image/SWIPE_NORTH_logo_black.svg" alt="logo" width={93} height={83} />
      </div>

      <div className={styles.menuListConatiner}>
        <div className={styles.menuList}>
          <Link href="/" className={styles.menuOption}>
            <MdSwipeUp style={{ fontSize: '1.2rem' }} />
            <p>{text.swipe}</p>
          </Link>
          <Link href="/matchJob" className={styles.menuOption}>
            <FaHeart style={{ fontSize: '1.1rem' }} />
            <p>{text.saved}</p>
          </Link>
        </div>

        <div className={styles.menuList}>
          <div className={styles.menuOption}>
            <MdOutlineLanguage style={{ fontSize: '1.2rem' }} />
            <p>{text.language}</p>
            <div className={styles.flagContainer}>
              <Image
                src={'/..//image/eng.svg'}
                alt="eng-flag"
                width={16}
                height={16}
                onClick={toggleLanguage}
                style={{ opacity: flagOpacity(language, 'eng') }}
              />
              <Image
                src={'/..//image/swe.svg'}
                alt="eng-flag"
                width={16}
                height={16}
                onClick={toggleLanguage}
                style={{ opacity: flagOpacity(language, 'swe') }}
              />
            </div>
          </div>
            <Link href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/Sakas19/swipe-north.git" className={styles.menuOption}>
            <ImShare2 style={{ fontSize: '1rem' }} />
            <p>{text.share}</p>
          </Link>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h2>{text.title}</h2>
        <p>{text.description1}</p>
        <p>{text.description2}</p>
      </div>
    </div>
  );
};

const flagOpacity = (language, flag) => {
  return language === flag ? 1 : 0.3;
};

export default Menu;

