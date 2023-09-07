import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hello and Welcome!</b>
                <br />
                Explore various stories and creative concepts.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/p1.jpeg"
                        alt="p1"
                        fill
                        className={styles.image}
                        priority
                        sizes="50vw"
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet alim consectetur adipisicing
                        elit.
                    </h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cupiditate, quam nisi magni ea laborum inventore
                        voluptatum laudantium repellat ducimus unde aspernatur
                        fuga. Quo, accusantium quisquam! Harum unde sit culpa
                        debitis.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
