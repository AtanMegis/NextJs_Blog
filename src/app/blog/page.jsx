import React from 'react'
import styles from './Blog.module.css'
import Menu from '@/components/Menu/Menu.jsx'
import CardList from '@/components/CardList/CardList.jsx'

const Blog = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1
    const { cat } = searchParams

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}
export default Blog
