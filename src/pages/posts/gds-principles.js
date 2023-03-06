import PageWrapper from '@/components/PageWrapper';
import styles from '@/styles/GDSPrinciples.module.css'
import Image from 'next/image';

export default function GDSPrinciples() {
    return (
        <PageWrapper title='The 10 Design Principles of the Government Digital Service'>
            <main className={styles.main}>
                <h1 className={styles.heading}>The 10 Design Principles of the Government Digital Service</h1>
                <div className={styles.principles}>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}>
                            <Image fill src="/assets/img/feedtheneed.jpg" alt="Graffiti that reads Feed the 'need'" />
                        </div>
                        <div>
                            <h2 className={styles.principleName}>Start with user needs</h2>
                            <div className={styles.principleText}>
                                <p>Any well designed service should prioritise the user and their needs.</p>
                                <p>Even an efficient, affordable and easy to run service is practically useless if it doesn't help the user achieve their end goals.</p>
                                <p>User research should be performed to identify these needs from the start and keep being performed to make sure they have not changed and are being met.</p>
                                <div>
                                    <h3>Important Notes:</h3>
                                    <ul>
                                        <li>Don't assume - use the results of user research to identify the user's requirements.</li>
                                        <li>What a user wants or asks for does not always match what they need.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Do less</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Design with data</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Do the hard work to make it simple</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Iterate. Then iterate again.</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>This is for everyone</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Understand context</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Build digital services, not websites</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Be consistent, not uniform</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleExample}></div>
                        <div>
                            <h2 className={styles.principleName}>Make things open: it makes things better</h2>
                            <div className={styles.principleText}>Principle Text</div>
                        </div>
                    </section>
                </div>
            </main>
        </PageWrapper>
    )
}
