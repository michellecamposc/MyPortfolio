import React from 'react';
import styles from '../styles/Home.module.css';
import { BiCopyright } from 'react-icons/bi';

export const FooterSection = () => {
	return (
		<>
			<div className={styles.contactContainer}>
				<hr className={styles.seperateLine} />
				<div className={styles.sayHiText}>
					<h1>
						<span>Say hi to </span>
						<span>Stephanie.</span>
					</h1>
				</div>
				<p className={styles.informationAbout}>
					If you need a Frontend developer or UX/UI designer for your project,
					send me an email and I will contact you.
				</p>
				<button className={styles.sendEmailButton}>Send me an Email</button>
				<hr className={styles.seperateLine} />
				<footer className={styles.footerSection}>
					<BiCopyright />
					Copyright - Stephanie Campos
				</footer>
			</div>
		</>
	);
};
