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
                                <p>The users journey usally starts on a search engine (like Google) which means the name of a service is extremely important.</p>
                                <p>Using a name that reflects what the user is trying to do will help both the user and the organisation remember the ultimate purpose of the service.</p>
                                <p>Service names should be verbs and not nouns and definitely not acronyms.</p>
                                <p>Use words that users will understand (e.g. &apos;Help with payment&apos; rather than &apos;Fee remission&apos;)</p>
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
                                <div>
                                    <p>A user with no prior knowledge must understand:</p>
                                    <ul>
                                        <li>who the service is for</li>
                                        <li>what it does</li>
                                        <li>why it does it</li>
                                        <li>how it does it</li>
                                    </ul>
                                </div>
                                <p>Explain this through the service name, description and even the interface.</p>
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
                                <div>
                                <p>Clearly explain what is needed from the user to complete the service and what the user can expect from the service provider in return. This includes:</p>
                                <ul>
                                    <li>how long something will take to complete</li>
                                    <li>how much it will cost</li>
                                    <li>if there are restrictions on who or how you can use the service</li>
                                </ul>
                                </div>
                                <p>understand &apos;universal&apos;, &apos;assumed&apos;, and &apos;outlier&apos; expectations that the user might have based on research of similar services.</p>
                                <p>Meet as many of these expectations as possible and explain to the user why any haven&apos;t been met.</p>
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
                                <p>Understand what the user is trying to achieve</p>
                                <p>Get a good understanding of who else delivers parts of the service and how they relate to your organisation</p>
                                <p>If it isn&apos;t feasible to deliver the entire service, define a rational scope for your part of the service</p>
                                <p>Consider which part of the service should be delivered first - it does not need to be delivered all at once. Start small and build and improve in small increments.</p>
                                <p>Examine how data is shared - are there things the user should have access to make the service easier or things you need from other organisations to make the service better?</p>
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
                                <p>Conform to established customs that benefit the user but avoid customs that negatively affect the user or could be improved.</p>
                                <p>Test all customs to make sure they are aligned with users&apos; expectations.</p>
                                <p>Share any changes you make so better patterns can become ubiquitous.</p>
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
