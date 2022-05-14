import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}> AV0CAD0 CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link}  passHref>
            <>
            <span className={styles.linkTitle}>WORK WITH US </span>
            <Image src="/img/link.png" width="40px" height="40px" alt='' />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          123 DIXION STREET,
          <br /> CA
        </div>
        <div className={styles.cardItem}>
          CONTACT@MARIAMA.DEV
          <br /> 647-218-9752
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 MARIAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer