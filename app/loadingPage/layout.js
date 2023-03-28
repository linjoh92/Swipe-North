import '../globals.css'
import styles from './loading.module.css'

export const metadata = {
  title: 'Swipe North',
  description: 'Swipa på jobb i Skellefeå',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.loadingDiv}>{children}</div>
      </body>
    </html>
  )
}
