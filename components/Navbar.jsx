import Link from 'next/link';
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/">AV0CAD0</Link>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link href="/products/design">DESIGN</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/development">DEVELOPEMNT</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/production">PRODUCTION</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/products/photography">PHOTOGRAPHY</Link>
            </li>
            <li className={styles.listItem}>
                <Link href="/contact">CONTACT</Link>
            </li>         
        </ul>
    </div>
  )
}

export default Navbar;
