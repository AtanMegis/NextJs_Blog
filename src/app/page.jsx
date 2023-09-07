import styles from './homepage.module.css'
import Featured from '@/components/Featured/Featured.jsx'
import CategoryList from '@/components/CategoryList/CategoryList.jsx'
import CardList from '@/components/CardList/CardList.jsx'
import Menu from '@/components/Menu/Menu.jsx'

export default function Home() {
    return (
        <div className={styles.container}>
            <Featured />
            <CategoryList />
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}
