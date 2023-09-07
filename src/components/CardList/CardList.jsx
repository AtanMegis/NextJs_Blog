import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../Pagination/Pagination.jsx'

const CardList = () => {
    return (
        <div className={styles.container}>
            <Pagination />
        </div>
    )
}

export default CardList
