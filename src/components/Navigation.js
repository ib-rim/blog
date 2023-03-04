import styles from '@/styles/Navigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav className={styles.navigation}>
            {currentRoute !== '/' ?
                <Link href="/" className={styles.navigationLink}>Home</Link>
                : <></>}
        </nav>
    )
}