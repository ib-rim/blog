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
                                <p>Use words that users will understand (e.g. &apos;Help with payment&apos; rather than &apos;Fee remission&apos;).</p>
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
                                <p>Understand what the user is trying to achieve.</p>
                                <p>Get a good understanding of who else delivers parts of the service and how they relate to your organisation.</p>
                                <p>If it isn&apos;t feasible to deliver the entire service, define a rational scope for your part of the service.</p>
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
                                <p>This can be achieved by following all of the prior principles.</p>
                                <p>There is no service that will be used just by people who have used it before.</p>
                                <p>Even presumptions users make from using similar services may still need to be explained.</p>
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
                                <p>The service should work in a way that does not unnecessarily expose the user to the internal structures of the organisation providing the service.</p>
                                <p>Identify potential silos in the organisation or with other organisations that may be providing parts of the same service.</p>
                                <p>If the operating model can not be changed, change the way communicate and collaboration is done.</p>
                                <p>Create a permissive environment for collaboration, like shared standards, goals and incentives, to help people work together.</p>
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
                                <p>This can mean proactively meeting a user&apos;s needs without them instigating an interaction with your organisation.</p>
                                <p>Review where decisions need to be made in the service and where steps can be added or merged</p>
                                <p>Allow users to focus on one task at a time splitting a step where users make multiple decisions</p>
                                <p>The space between steps of the service can be designed with purpose to give the user visibility and control of a decision. Consider slowing down major decision steps or speeding up areas where decisions are minor.</p>
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
                                <p>The service should look and feel like one service throughout, regardless of how it is delivered. Language, visual styles and interaction patterns should all be consistent.</p>
                                <p>If one part of the service does not follow the principles of another (like using inclusive pronouns), it creates distrust in the service and organisation.</p>
                                <p>A chain is only as strong as the weakest link - focus on the abilities of the whole organisation and not just the skills of superstar players.</p>
                                <p>Consistent ≠ Uniform: allow staff to respond individually to users or problems to deliver the same experience in the best way for each situation.</p>
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
                                <p>A service should direct all users to a clear outcome, regardless of whether the user is eligible or suitable to use the service. No user should be left behind or standed within a service without knowing how to continue.</p>
                                <p>Evenly distribute the complexity of the service regardless of the path the user takes.</p>
                                <p>Ensure the service is inclusive - be aware of presumptions you are making about what the user can do and allow different ways to complete the same goal.</p>
                                <p>Treat new technologies as progressive enhancements on the last - if the service fails, the user should still be able to rely on the technology or method that came before it.</p>
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
