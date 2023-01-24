import styles from './SheetItem.module.css';
export default function SheetItem({ data }) {
	const time = new Date(data.time);
	const timestring = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;

	return (
		<div className={styles.SheetItem}>
			<div className={styles.Name}>{data.nickname}</div>
			<div className={styles.Quote}>{data.quote}</div>
			<div className={styles.Time}>{timestring}</div>
		</div>
	);
}
