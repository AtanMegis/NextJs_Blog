import Menu from '@/components/Menu/Menu.jsx'
import Image from 'next/image'
import React from 'react'
import styles from './SinglePage.module.css'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>WAK OAW OA</h1>
                    <div className={styles.user}>
                        {/* {data?.user?.image && ( */}
                        <div className={styles.userImageContainer}>
                            <Image
                                src="/p1.jpeg"
                                alt=""
                                fill
                                className={styles.avatar}
                            />
                        </div>
                        {/* )} */}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>NAME USER</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                {/* {data?.img && ( */}
                <div className={styles.imageContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt=""
                        fill
                        className={styles.image}
                    />
                </div>
                {/* )} */}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        // dangerouslySetInnerHTML={{ __html: data?.desc }}
                    />
                    <div className={styles.comment}>
                        {/* <Comments postSlug={slug} /> */}
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage
