import Navigation from './Navigation';
import Head from 'next/head';

export default function PageWrapper(props) {

    return (
        <div>
            <Head>
                <title>{props.title} | Ibrahim Bashir</title>
                <meta name="description" content="Card Games Web App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            {props.children}
        </div>
    )
}