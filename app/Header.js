'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import styles from './headerFooter.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [, setPrevPage] = useState('/')
  const router = useRouter()

  const toggleMenu = () => {
    if (menuOpen) {
      router.back()
    } else {
      setPrevPage(router.pathname)
      router.push('/menu')
    }
    setMenuOpen(!menuOpen)
  }

  const closeIcon = (
    <div onClick={toggleMenu}>
      <CgClose style={{ fontSize: '2.2rem' }} />
    </div>
  )

  const menuIcon = menuOpen ? (
    closeIcon
  ) : (
    <div onClick={toggleMenu}>
      <FiMenu style={{ fontSize: '2.2rem' }} />
    </div>
  )

  const handleLogoClick = () => {
    if (menuOpen) {
      router.push('/')
      setMenuOpen(false)
    }
  }

  const handleHeartClick = () => {
    router.push('/matchJob')
    if (menuOpen) {
      setMenuOpen(false)
    }
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <div onClick={handleLogoClick}>
          <Image
            src="/image/skelleftea_logo_DOT_black.svg"
            alt="logo"
            width={78}
            height={42}
          />
        </div>
      </Link>
      <div className={styles.headerIconContainer}>
        <div onClick={handleHeartClick}>
          <FaHeart style={{ fontSize: '1.8rem', color: '#9EB45A' }} />
        </div>
        <div className={styles.menuIcon}>{menuIcon}</div>
      </div>
    </header>
  )
}

export default Header
