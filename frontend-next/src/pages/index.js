import Sheet from '@/components/Sheet/Sheet';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import { getQuotes } from '@/lib/quotes';

export default function Home({ quotesData }) {
	return (
		<>
			<Head>
				<meta charset='utf-8' />
				<link rel='icon' href='/logo.png' />
				<link rel='apple-touch-icon' href='/logo.png' />
				<link rel='manifest' href='/manifest.json' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />
				<meta name='description' content='shitbag sheet v2' />

				<title>Shitbags</title>
			</Head>
			<div className={styles.Home}>
				<Sheet quotesData={quotesData} />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const quotesData = await getQuotes();
	return {
		props: {
			quotesData,
		},
		revalidate: 10,
	};
}
