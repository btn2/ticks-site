import config from '@/config.json';

export async function getQuotes() {
	let res = await fetch(`${config.backendurl}/getquotes`);
	let json = await res.json();
	return json;
}
