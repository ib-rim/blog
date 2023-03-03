import styles from '@/styles/Home.module.css'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link';

export default function Home() {
    return (
        <PageWrapper>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.heading}>Ibrahim Bashir's Blog</h1>
                    <h2>What's this for?</h2>
                    <ul className={styles.description}>
                        <li>Anything I've learnt as I develop my skills and gain experience in Front End Development and UX Design.</li>
                        <li>Any achievements I'm proud of; both professional and personal.</li>
                    </ul>
                </div>
                <nav>
                    <h2>Blog Posts</h2>
                    <ul className={styles.posts}>
                    </ul>
                </nav>
            </main>
        </PageWrapper>
    )
}
