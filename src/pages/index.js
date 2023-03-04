import styles from '@/styles/Home.module.css'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link';

export default function Home() {
    return (
        <PageWrapper title='Blog'>
            <main className={styles.container}>
                <div>
                    <h1 className={styles.heading}>Ibrahim Bashir&apos;s Blog</h1>
                    <h2 className={styles.subheading}>What&apos;s this for?</h2>
                    <ul className={styles.description}>
                        <li>Anything I&apos;ve learnt as I develop my skills and gain experience in Front End Development and UX Design.</li>
                        <li>Any achievements I&apos;m proud of; both professional and personal.</li>
                    </ul>
                </div>
                <nav>
                    <h2 className={styles.subheading}>Blog Posts</h2>
                    <ul className={styles.posts}>
                        <li><Link href='/' className={styles.postLink}>The 10 Design Principles of the Government Digital Service</Link></li>
                        <li><Link href='/' className={styles.postLink}>The 15 Principles of Good Service Design</Link></li>
                    </ul>
                </nav>
            </main>
        </PageWrapper>
    )
}
