import React from 'react';
import styles from '../styles/Home.module.css';
import { BiCopyright } from 'react-icons/bi';
import { useState } from 'react';

export const FooterSection = () => {
	const [isButtonActive, setIsButtonActive] = useState(false);
	//The button has a temporary visual effect after being clicked and returns to its original state after two seconds.
	const handleButtonClick = () => {
		//Allows me to write my email on the clipboard
		navigator.clipboard.writeText('stephcamposc@gmail.com');
		setIsButtonActive(true);
		setTimeout(() => {
			setIsButtonActive(false);
		}, 2000);
	};

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
					send me an email and I will contact you👋🏻.
				</p>
				<button
					type='button'
					className={`${styles.sendEmailButton} ${
						isButtonActive ? styles.buttonCopied : ''
					}`}
					onClick={handleButtonClick}
				>
					{isButtonActive ? 'Email copied' : 'Send me an Email'}
				</button>
				<hr className={styles.seperateLine} />
				<footer className={styles.footerSection}>
					<BiCopyright style={{ marginRight: '7px' }} />
					Copyright - Stephanie Campos
				</footer>
			</div>
		</>
	);
};
