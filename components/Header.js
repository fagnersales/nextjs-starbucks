import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export const HeaderComponent = () => {
  return (<>
    <header className={styles.header}>
      <Link href="#" passHref>
        <div className={styles.logo_image}>
          <Image
            src="/images/logo.png"
            alt="Starbucks Logo"
            width='100%'
            height='100%'
            objectFit='contain'
          />
        </div>
      </Link>

      <ul>
        <li><Link href="#"><a className={styles.header_link}>Home</a></Link></li>
        <li><Link href="#"><a className={styles.header_link}>Menu</a></Link></li>
        <li><Link href="#"><a className={styles.header_link}>What is New</a></Link></li>
        <li><Link href="#"><a className={styles.header_link}>Contact</a></Link></li>
      </ul>
    </header>
  </>)
}
