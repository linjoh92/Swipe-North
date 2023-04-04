'use client'
import styles from './headerLikeBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import Menu from './menu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const menuIcon = (
    <div onClick={toggleMenu}>
      {menuOpen ? (
        <CgClose style={{ fontSize: '2.2rem' }} />
      ) : (
        <FiMenu style={{ fontSize: '2.2rem' }} />
      )}
    </div>
  )

  return (
    <header className={styles.header}>
      <Link href="/" onClick={closeMenu}>
        <Image
          src="/image/skelleftea_logo_DOT_black.svg"
          alt="logo"
          width={78}
          height={42}
          priority={true}
        />
      </Link>
      <div className={styles.headerIconContainer}>
        <Link href="/matchJob" onClick={closeMenu}>
          <FaHeart className={styles.heartHeader} />
        </Link>
        <div className={styles.menuIcon}>{menuIcon}</div>
      </div>
      {menuOpen && <Menu closeMenu={closeMenu} />}
    </header>
  )
}

export default Header
