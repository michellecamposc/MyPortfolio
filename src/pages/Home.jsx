import React from 'react';
import { Navbar } from '../components/NavBar';
import { Project } from '../components/Project';
import { ProjectButton } from '../components/ProjectButton';
import styles from '../styles/Home.module.css';

export const Home = () => {
	return (
		<div id={styles.homeContainer}>
			<Navbar />
			<section className={styles.principalContainer}>
				<div id={styles.descriptionContainer}>
					<h1>Hi, I'm Stephanie.</h1>
					<h2>Frontend Developer and UX/UI Designer</h2>
					<section id={styles.buttonContainer}>
						<ProjectButton />
					</section>
				</div>
			</section>
			<Project />
			<Project />
			<Project />
			<Project />
			<Project />
		</div>
	);
};
