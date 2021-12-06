import React from 'react';
import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../Navbar/img/logo-horizontal-inverted.svg";

function Footer() {

	return (
		<div>
			<div className={styles.footer}>
				<div className={styles.footercontainer}>
					<Link to='/'><img className={styles.navbarimg} src={logo} alt="ITMO" /></Link>
					<div className={styles.footerlinks}>
						<Link className={styles.footerlink} to='/about'>О проекте</Link>
						<Link className={styles.footerlink} to='/conditions'>Условия участия</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
