import React from 'react';
import styles from '../styles/Home.module.css';
import { ImArrowRight2 } from 'react-icons/im';

export const Project = ({ name, description, image }) => {
	return (
		<>
			<div className={styles.projectContainer}>
				<section className={styles.projectDescription}>
					<h3>{name}</h3>
					<h1>{description}</h1>
					<button className={styles.seeProjectButton}>
						See this project <ImArrowRight2 />
					</button>
				</section>
				<figure className={styles.projectPhoto}>
					<img className={styles.projectImages} src={image} />
				</figure>
			</div>
		</>
	);
};
