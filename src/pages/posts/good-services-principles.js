import PageWrapper from '@/components/PageWrapper';
import styles from '@/styles/GoodServicesPrinciples.module.css'
import Image from 'next/image';
import GoogleSearch from '@/assets/img/good-service/googlesearch.png';
import BlankBillboard from '@/assets/img/good-service/blankbillboard.png';
import NoWalkingSign from '@/assets/img/good-service/nowalkingsign.png';
import BowlingRamp from '@/assets/img/good-service/bowlingramp.png';
import RecycleBin from '@/assets/img/good-service/recyclebin.png';
import PlatformerControls from '@/assets/img/good-service/platformercontrols.png';
import Siloes from '@/assets/img/good-service/siloes.png';
import ObviousName from '@/assets/img/good-service/obviousname.png';
import WeakestLink from '@/assets/img/good-service/weakestlink.png';
import DeadEnd from '@/assets/img/good-service/deadend.png';
import AccessibleStairs from '@/assets/img/accessiblestairs.png';
import Escalator from '@/assets/img/good-service/escalator.png';
import Clocks from '@/assets/img/good-service/clocks.png';
import QuestionMark from '@/assets/img/good-service/questionmark.png';
import HumanService from '@/assets/img/good-service/humanservice.png';

export default function GoodServicesPrinciples() {
    return (
        <PageWrapper title='The 15 Principles of Good Service Design'>
            <main className={styles.main}>
                <h1 className={styles.heading}>The 15 Principles of Good Service Design</h1>
                <div className={styles.principles}>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={GoogleSearch} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Be easy to find</h2>
                            <div className={styles.principleDescription}>
                                <p>Be easy to find</p>
                                <p>Be easy to find</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={BlankBillboard} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Clearly explain its purpose</h2>
                            <div className={styles.principleDescription}>
                                <p>Clearly explain its purpose</p>
                                <p>Clearly explain its purpose</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={NoWalkingSign} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Set a user&apos;s expectations of the service</h2>
                            <div className={styles.principleDescription}>
                                <p>Set a user&apos;s expectations of the service</p>
                                <p>Set a user&apos;s expectations of the service</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={BowlingRamp} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Enable each user to complete the outcome they set out to do</h2>
                            <div className={styles.principleDescription}>
                                <p>Enable each user to complete the outcome they set out to do</p>
                                <p>Enable each user to complete the outcome they set out to do</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={RecycleBin} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Work in a way that is familiar</h2>
                            <div className={styles.principleDescription}>
                                <p>Work in a way that is familiar</p>
                                <p>Work in a way that is familiar</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={PlatformerControls} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Require no prior knowledge to use</h2>
                            <div className={styles.principleDescription}>
                                <p>Require no prior knowledge to use</p>
                                <p>Require no prior knowledge to use</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Siloes} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Be agnostic of organisational structures</h2>
                            <div className={styles.principleDescription}>
                                <p>Be agnostic of organisational structures</p>
                                <p>Be agnostic of organisational structures</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={ObviousName} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Require the minimum possible steps to complete</h2>
                            <div className={styles.principleDescription}>
                                <p>Require the minimum possible steps to complete</p>
                                <p>Require the minimum possible steps to complete</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={WeakestLink} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Be consistent throughout</h2>
                            <div className={styles.principleDescription}>
                                <p>Be consistent throughout</p>
                                <p>Be consistent throughout</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={DeadEnd} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Have no dead ends</h2>
                            <div className={styles.principleDescription}>
                                <p>Have no dead ends</p>
                                <p>Have no dead ends</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={AccessibleStairs} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Be usable by everyone, equally</h2>
                            <div className={styles.principleDescription}>
                                <p>Be usable by everyone, equally</p>
                                <p>Be usable by everyone, equally</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Escalator} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Encourage the right behaviours from users and service providers</h2>
                            <div className={styles.principleDescription}>
                                <p>Encourage the right behaviours from users and service providers</p>
                                <p>Encourage the right behaviours from users and service providers</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Clocks} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Quickly respond to change</h2>
                            <div className={styles.principleDescription}>
                                <p>Quickly respond to change</p>
                                <p>Quickly respond to change</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={QuestionMark} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Clearly explain why a decision has been made</h2>
                            <div className={styles.principleDescription}>
                                <p>Clearly explain why a decision has been made</p>
                                <p>Clearly explain why a decision has been made</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={HumanService} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Make it easy to get human assistance</h2>
                            <div className={styles.principleDescription}>
                                <p>Make it easy to get human assistance</p>
                                <p>Make it easy to get human assistance</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </PageWrapper>
    )
}
