'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import styles from './headerFooter.module.css'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeIcon = (
    <Link href="/">
      <CgClose
        style={{ fontSize: '2.2rem' }}
        onClick={() => setMenuOpen(false)}
      />
    </Link>
  )

  const menuIcon = menuOpen ? (
    closeIcon
  ) : (
    <div onClick={toggleMenu}>
      <Link href="/menu">
        <FiMenu style={{ fontSize: '2.2rem' }} />
      </Link>
    </div>
  )

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/image/skelleftea_logo_DOT_black.svg"
          alt="logo"
          width={78}
          height={42}
        />
      </Link>
      <div className={styles.headerIconContainer}>
        <Link href="/matchJob">
          <FaHeart style={{ fontSize: '1.8rem', color: '#9EB45A' }} />
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuIcon}
        </div>
      </div>
    </header>
  )
}

export default Header
