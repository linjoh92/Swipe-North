'use client'

import styles from './menu.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MdSwipeUp } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineLanguage } from 'react-icons/md'
import { ImShare2 } from 'react-icons/im'
import { useEffect, useState } from 'react'
import languageText from '../textContent'

const Menu = ({ setMenuOpen, setMenuIcon }) => {
  const [language, setLanguage] = useState('swe')
  const [text, setText] = useState('')

  useEffect(() => {
    language === 'swe' ? setText(languageText.swe) : setText(languageText.eng)
  }, [language])

  const handleClick = (flag) => {
    setLanguage(flag)
  }

  const flagOpacity = (flag) => {
    return language === flag ? 1 : 0.3
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
    setMenuIcon(false)
  }

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
          <Link
            href="/"
            className={styles.menuOption}
            onClick={handleLinkClick}
          >
            <MdSwipeUp style={{ fontSize: '1.2rem' }} />
            <p>{text.swipe}</p>
          </Link>
          <Link
            href="/matchJob"
            className={styles.menuOption}
            onClick={handleLinkClick}
          >
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
                onClick={() => handleClick('eng')}
                style={{ opacity: flagOpacity('eng') }}
              />
              <Image
                src={'/..//image/swe.svg'}
                alt="eng-flag"
                width={16}
                height={16}
                onClick={() => handleClick('swe')}
                style={{ opacity: flagOpacity('swe') }}
              />
            </div>
          </div>
          <Link
            href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/Sakas19/swipe-north.git"
            className={styles.menuOption}
            onClick={handleLinkClick}
          >
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
  )
}

export default Menu
