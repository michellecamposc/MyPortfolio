import React from 'react';
import styles from '../styles/ProjectsDetails.module.css';
import { FooterSection } from '../components/FooterSection';
import { Navbar } from '../components/NavBar';

export const ProjectDetails = () => {
	return (
		<div className={styles.projectsDetailsContainer}>
			<Navbar />
			<section className={styles.individualProjectContainer}>
				<h1>Data Lover</h1>
				<p>
					Data lover is a responsive web application created to display data
					about the world of Harry Potter. It allows the user to view, filter,
					and order data regarding the saga in a friendly way.
				</p>
				<figure>
					<img />
				</figure>
			</section>
			<FooterSection />
		</div>
	);
};
