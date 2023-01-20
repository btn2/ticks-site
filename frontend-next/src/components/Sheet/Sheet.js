import SheetItem from '@/components/SheetItem/SheetItem';
import styles from './Sheet.module.css';
export default function Sheet({ quotesData }) {
	return (
		<div>
			<div className={styles.header}>monkopppeople shitbag wall</div>
			{quotesData.map((quote, index) => (
				<SheetItem key={index} data={quote} />
			))}
		</div>
	);
}
