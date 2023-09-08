'use client'
import React, { useContext } from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext.jsx'

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext)

    return (
        <div
            className={styles.container}
            onClick={toggle}
            style={
                theme === 'dark'
                    ? { backgroundColor: 'white' }
                    : { backgroundColor: '#0f172a' }
            }
        >
            <Image src="/moon.png" width={14} alt="moon" height={14}></Image>
            <div
                className={styles.ball}
                style={
                    theme === 'dark'
                        ? { left: 1, backgroundColor: '#0f172a' }
                        : { right: 1, backgroundColor: 'white' }
                }
            ></div>
            <Image src="/sun.png" width={14} alt="sun" height={14}></Image>
        </div>
    )
}

export default ThemeToggle
