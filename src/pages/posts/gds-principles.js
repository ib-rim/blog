import PageWrapper from '@/components/PageWrapper';
import styles from '@/styles/GDSPrinciples.module.css'
import Image from 'next/image';
import FeedTheNeed from '@/assets/img/feedtheneed.png'
import Cylinders from '@/assets/img/cylinders.png';
import Design from '@/assets/img/design.png';
import RoadSign from '@/assets/img/beautifulroadssign.png';
import Iteration from '@/assets/img/iteration.png';
import AccessibleStairs from '@/assets/img/accessiblestairs.png';
import Devices from '@/assets/img/devices.png';
import UserJourneyMap from '@/assets/img/userjourneymap.png';
import CustomerService from '@/assets/img/customerservice.png';
import Sharing from '@/assets/img/sharing.png';

export default function GDSPrinciples() {
    return (
        <PageWrapper title='The 10 Design Principles of the Government Digital Service'>
            <main className={styles.main}>
                <h1 className={styles.heading}>The 10 Design Principles of the Government Digital Service</h1>
                <div className={styles.principles}>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={FeedTheNeed} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Start with user needs</h2>
                            <div className={styles.principleDescription}>
                                <p>Any well designed service should prioritise the user and their needs.</p>
                                <p>Even an efficient, affordable and easy to run service is practically useless if it doesn&apos;t help the user achieve their end goals.</p>
                                <p>User research should be performed to identify these needs from the start and keep being performed to make sure they have not changed and are being met.</p>
                                <div>
                                    <h3>Important Notes:</h3>
                                    <ul>
                                        <li>Don&apos;t assume - use the results of user research to identify the user&apos;s requirements.</li>
                                        <li>What a user wants or asks for does not always match what they need.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Cylinders} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Do less</h2>
                            <div className={styles.principleDescription}>
                                <p>Don&apos;t waste time reinventing the wheel.</p>
                                <p>If a solution that meets the standards and requirements already exists, use it. Reusing tried and tested components will save time and money.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Design} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Design with data</h2>
                            <div className={styles.principleDescription}>
                                <p>Decisions should be informed by data.</p>
                                <p>Analytics are an important part of the software and should be used at every stage of development. Better data leads to better decisions.</p>
                                <p>Don&apos;t rely on assumptions or guesses. Use search logs, user accounts, support tickets, contact forms and social media as sources to find out where the service needs improving.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={RoadSign} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Do the hard work to make it simple</h2>
                            <div className={styles.principleDescription}>
                                <p>Abstraction is key.</p>
                                <p>Make things look simple and simple to use, even if it requires a complex solution. This can even involve restructing the team or the methodology of the organisation to achieve what will work best in the end.</p>
                                <p> Development of the service should almost always take more effort than using the service itself.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Iteration} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Iterate. Then iterate again.</h2>
                            <div className={styles.principleDescription}>
                                <p>Work in an agile way.</p>
                                <p>Learn from failures, be able to deal with uncertainty and respond to change.</p>
                                <p>Start with a Minimum Viable Prototype, test it with real users as early as possible and continue improving until all requirements have been met.</p>
                                <p>It's easier to abandon or restart a service while it's still a prototype than a multiyear time sink.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={AccessibleStairs} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>This is for everyone</h2>
                            <div className={styles.principleDescription}>
                                <p>The people that need the service the most are usually the most overlooked.</p> 
                                <p>Coverage for the majority of people is not enough. Everyone should be able to access and use the service regardless of disabilities and technical literacy. Everything should be as inclusive, legible and usable as possible.</p>
                                <p>Effectiveness for all users takes priority over efficiency or satisfaction for some users.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Devices} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Understand context</h2>
                            <div className={styles.principleDescription}>
                                <p>People of different capabilities will use the service from a variety of locations and devices.</p>
                                <p>Make sure these contexts are well understood through user research and create a service that can work across different contexts with little change required.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={UserJourneyMap} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Build digital services, not websites</h2>
                            <div className={styles.principleDescription}>
                                <p>The users journey usually does not start on a website or end on a website.</p>
                                <p>The entire process must be considered, from why the user is using the service in the first place and what the user can or might do next as a result.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={CustomerService} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Be consistent, not uniform</h2>
                            <div className={styles.principleDescription}>
                                <p>Make things similar but not always exactly the same.</p>
                                <p>Use the same language, patterns and components as much as possible but allow for exceptions where needed. Rarely will one method work for everyone.</p>
                                <p>A perfect example of this is customer service. After talking with a customer service representative, the user should feel listened to and satisfied that their problem has been or will be resolved. However, each customer service representative should be able to adapt to each user individually without using the same pre-written lines to ensure this can happen.</p>
                            </div>
                        </div>
                    </section>
                    <section className={styles.principle}>
                        <div className={styles.principleImage}>
                            <Image fill src={Sharing} alt="" />
                        </div>
                        <div className={styles.principleText}>
                            <h2 className={styles.principleName}>Make things open: it makes things better</h2>
                            <div className={styles.principleDescription}>
                                <p>Share everything learnt both internally and externally.</p>
                                <p>More eyes means more feedback and a better servive.</p>
                                <p>Making code open source allows for others to use what has already tested to be effective and suggest improvements and alternatives.</p> 
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </PageWrapper>
    )
}
