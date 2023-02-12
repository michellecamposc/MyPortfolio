import React from 'react';
import styles from '../styles/Home.module.css';
import { ImArrowRight2 } from 'react-icons/im';

export const Project = () => {
	return (
		<>
			<div className={styles.projectContainer}>
				<section className={styles.projectDescription}>
					<h3>Data Lover</h3>
					<h1>
						Website design & <br /> build
					</h1>
					<button className={styles.seeProjectButton}>
						See this project <ImArrowRight2 />
					</button>
				</section>
				<figure className={styles.projectPhoto}>
					<img src='/src/images/harryHome.png' alt='Harry Potter page' />
				</figure>
			</div>
		</>
	);
};
