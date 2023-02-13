import React from 'react';
import styles from '../styles/ProjectsDetails.module.css';
import { FooterSection } from '../components/FooterSection';
import { Navbar } from '../components/NavBar';
import dataProjectDetails from '../data/projectDetails.json';
import { useParams } from 'react-router-dom';

export const ProjectDetails = () => {
	const { id } = useParams();
	const project = dataProjectDetails.projectsDetails.find(
		(project) => project.id === parseInt(id)
	);

	const images = Array.isArray(project.images) ? (
		project.images.map((image, index) => (
			<img
				key={index}
				className={styles.imagesProjectContainer}
				src={image}
				alt={project.title}
			/>
		))
	) : (
		<img
			className={styles.imagesProjectContainer}
			src={project.images}
			alt={project.title}
		/>
	);

	return (
		<div className={styles.projectsDetailsContainer}>
			<Navbar />
			<article className={styles.individualProjectContainer}>
				<h1>{project.title}</h1>
				<p>{project.description}</p>
				{images}
			</article>
			<div className={styles.linkContainer}>
				{project.url ? (
					<p>
						Visit the website 👉🏼 <a href={project.url}>Here</a>
					</p>
				) : null}
			</div>
			<FooterSection />
		</div>
	);
};
