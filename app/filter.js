'use client'
import styles from './page.module.css'
import { useLanguage } from './language'

const Filter = () => {
  const { text } = useLanguage('swe')

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTitle}>{text.filterTitle}</div>
      <div>
        <input placeholder={text.placeholder}></input>
      </div>
    </div>
  )
}

export default Filter
