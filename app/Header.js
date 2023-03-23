import './globals.css'
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";
import styles from './headerFooter.module.css'

const Header = () => {

return (
  <header className={styles.header}>
    <Link href="/">
      <Image
        src="/image/skelleftea_logo_DOT_black.svg"
        alt="logo"
        width={100}
        height={100}
      />
    </Link>
    <div className={styles.headerIconContainer}>
      <Link  href="/matchJob">
        <FaHeart style={{ fontSize: '1.8rem' , color: '#9EB45A' }} />
      </Link>
      <Link href="/Menu">
        <Image
          src="/image/hamburger_manu.svg"
          alt="menu"
          width={30}
          height={30}
        />
      </Link>
    </div>
  </header>
  )
};

export default Header;