import Image from 'next/image'
import styles from './Card.module.css'
import Link from 'next/link'

const Card = ({ key, item }) => {
    return (
        <div className={styles.container} key={key}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image
                        src={item.img}
                        alt={item.img}
                        fill
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.substring(0, 10)}
                    </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>{item.title}</h1>
                </Link>
                <div
                    className={styles.desc}
                    dangerouslySetInnerHTML={{
                        __html: item?.desc
                            ? item.desc
                                  .substring(0, 120)
                                  .replace(/<p>/g, '')
                                  .replace(/<\/p>/g, '')
                            : '',
                    }}
                />
                <Link href={`/posts/${item.slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card
