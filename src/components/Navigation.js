import styles from '@/styles/Navigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <>
            {currentRoute !== '/' ?
                <nav className={styles.navigation}>
                    <Link href="/" className={styles.navigationLink}>⬅ <span>Post Title</span></Link>
                    <Link href="/" className={styles.navigationLink}>Home</Link>
                    <Link href="/" className={styles.navigationLink}>➡ <span>Post Title</span></Link>
                </nav> : <></>}
        </>
    )
}