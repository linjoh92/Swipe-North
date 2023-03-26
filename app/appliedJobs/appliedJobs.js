import styles from './appliedJobs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsCheckLg } from "react-icons/bs";

export default function AppliedJobs(props) {
  const { image, rubrik, titel, type, link } = props

  return (
    <div className={styles.matchedContainer}>
      <Image
        src={image}
        alt="jobb"
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.textConatiner}>
        <Link href={link}>
          <h2>{rubrik} <BsCheckLg /></h2>
        </Link>
        <p>{titel}</p>
        <p>{type}</p>
      </div>
    </div>
  )
}
