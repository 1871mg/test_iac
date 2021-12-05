import React from 'react';
import styles from "../Footer2/Footer2.module.css";
import { Link } from "react-router-dom";

function Footer2() {
	return (
		<div className={styles.footer2}>

			<div className={styles.footermenucontainer}>

				<div className={styles.footermenutext}>
					<p className={styles.footermenutextspan}>Информация © 1993–2020 Университет ИТМО</p>
					<p className={styles.footermenutextspan}>Остались вопросы? Пишите <span className={styles.footer2email}>future@itmo.ru</span></p>
				</div>

				<div className={styles.footermenutext}>
					<Link className={styles.footer2link} to='/rules'>Правила использования информации в доменной зоне itmo.ru</Link>
					<Link className={styles.footer2link} to='/policy'>Политика обработки данных</Link>
				</div>

			</div>

		</div>
	);
}

export default Footer2;

