import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks.jsx'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={24}
                    height={24}
                />
                <Image
                    src="/instagram.png"
                    alt="instagram"
                    width={24}
                    height={24}
                />

                <Image
                    src="/youtube.png"
                    alt="youtube"
                    width={24}
                    height={24}
                />
            </div>
            <div className={styles.logo}>Next Blog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/" className={styles.link}>
                    Home
                </Link>
                <Link href="/" className={styles.link}>
                    Contact
                </Link>
                <Link href="/" className={styles.link}>
                    About
                </Link>
                <Link href="/write" className={styles.link}>
                    Write
                </Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar
