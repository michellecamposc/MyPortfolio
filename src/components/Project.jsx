import React from 'react';
import styles from '../styles/Home.module.css';
import { BsArrowRight } from 'react-icons/bs';

export const Project = () => {
	return (
		<>
			<div className={styles.projectContainer}>
				<section className={styles.projectDescription}>
					<h3>Data Lover</h3>
					<h1>Website design & build</h1>
					<button className={styles.seeProjectButton}>
						See this project <BsArrowRight />
					</button>
				</section>
				<figure className={styles.projectPhoto}>
					<img src='/src/images/harryHome.png' alt='Harry Potter page' />
				</figure>
			</div>
		</>
	);
};
