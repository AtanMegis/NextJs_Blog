import React from 'react'
import styles from './Blog.module.css'
import Menu from '@/components/Menu/Menu.jsx'

const Blog = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Styles Blog</h1>
            <div className={styles.content}>
                {/* <CardList page={page} cat={cat} /> */}
                <Menu />
            </div>
        </div>
    )
}

export default Blog
