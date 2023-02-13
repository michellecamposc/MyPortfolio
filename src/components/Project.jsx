import React from 'react';
import styles from '../styles/Home.module.css';
import { ImArrowRight2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const Project = ({ name, description, image, id }) => {
	return (
		<>
			<div className={styles.projectContainer}>
				<section className={styles.projectDescription}>
					<h3>{name}</h3>
					<h1>{description}</h1>
					<Link to={`/project/${id}`} style={{ textDecoration: 'none' }}>
						<button className={styles.seeProjectButton}>
							See this project <ImArrowRight2 style={{ marginLeft: '10px' }} />
						</button>
					</Link>
				</section>
				<figure className={styles.projectPhoto}>
					<img className={styles.projectImages} src={image} />
				</figure>
			</div>
		</>
	);
};
