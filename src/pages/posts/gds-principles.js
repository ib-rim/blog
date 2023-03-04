import PageWrapper from '@/components/PageWrapper';
import styles from '@/styles/GDSPrinciples.module.css'

export default function GDSPrinciples() {
    return (
        <PageWrapper title='The 10 Design Principles of the Government Digital Service'>
            <main className={styles.main}>
                <h1 className={styles.heading}>The 10 Design Principles of the Government Digital Service</h1>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Start with user needs</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Do less</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Design with data</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Do the hard work to make it simple</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Iterate. Then iterate again.</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>This is for everyone</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Understand context</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Build digital services, not websites</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Be consistent, not uniform</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
                <section className={styles.principle}>
                    <div className={styles.principleExample}></div>
                    <div>
                        <h2 className={styles.principleName}>Make things open: it makes things better</h2>
                        <div className={styles.principleText}></div>
                    </div>
                </section>
            </main>
        </PageWrapper>
    )
}
