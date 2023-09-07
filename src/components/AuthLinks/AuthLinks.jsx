'use client'
import React, { useState } from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link.js'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    const status = 'notAuthenticated'

    return (
        <>
            {status === 'notAuthenticated' ? (
                <Link href="Login" className={styles.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="Logout" className={styles.link}>
                        Logout
                    </Link>
                    <span className={styles.link}></span>
                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === 'notAuthenticated' ? (
                        <Link href="Login">Login</Link>
                    ) : (
                        <>
                            <Link href="Logout">Logout</Link>
                            <span className={styles.link}></span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks
