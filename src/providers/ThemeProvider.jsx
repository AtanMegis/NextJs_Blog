'use client'
import { ThemeContext } from '@/context/ThemeContext.jsx'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true) // ! to avoid warning as first render browser using server side we need to change to the client side !! COZ USEEFFECT RUNS ON CLIENT SIDE
    }, [])

    if (mounted) {
        return <div className={theme}>{children}</div>
    }
}

export default ThemeProvider
