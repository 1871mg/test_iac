import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import logo from './img/logo-horizontal-inverted.svg';

function Navbar() {

	return (
		<div>

			<div className={styles.navbar}>
				<div className={styles.navbarcontainer}>
					<Link to='/'><img className={styles.navbarimg} src={logo} alt="ITMO" /></Link>
					<ul className={styles.links}>
						<Link className={styles.navbarlink} to='/about'>О проекте</Link>
						<Link className={styles.navbarlink} to='/conditions'>Условия участия</Link>
					</ul>
					<div className={styles.burger}>
						<span></span>
					</div>
				</div>
			</div>

			<ul className={styles.burgermenu}>
				<Link className={styles.burgerlink} to='/about'>О проекте</Link>
				<Link className={styles.burgerlink} to='/conditions'>Условия участия</Link>
			</ul>

		</div>

	);
}

export default Navbar;
