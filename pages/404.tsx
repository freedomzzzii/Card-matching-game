import Link from 'next/link'

import styles from '../styles/404.module.scss'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.boxError}>
        <span className={styles.errorCode}>404</span>
        <span>Page Not Found</span>
      </div>
      <Link href="/">
        <span className={styles.backToHome}>Back to home Page</span>
      </Link>
    </div>
  )
}