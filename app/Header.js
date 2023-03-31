'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import styles from './headerLikeBar.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [, setPrevPage] = useState('/')
  const router = useRouter()

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false) // add this line
      router.back()
    } else {
      setPrevPage(router.pathname)
      router.push('/menu')
    }
    setMenuOpen(!menuOpen)
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
      <Link href="/">
        <Image
          src="/image/skelleftea_logo_DOT_black.svg"
          alt="logo"
          width={78}
          height={42}
          priority={true}
        />
      </Link>
      <div className={styles.headerIconContainer}>
        <Link href="/matchJob">
          <FaHeart style={{ fontSize: '1.8rem', color: '#9EB45A' }} />
        </Link>
        <div className={styles.menuIcon}>{menuIcon}</div>
      </div>
    </header>
  )
}

export default Header
