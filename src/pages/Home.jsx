import React from 'react';
import { Navbar } from '../components/NavBar';
import { Project } from '../components/Project';
import { ProjectButton } from '../components/ProjectButton';
import styles from '../styles/Home.module.css';
import data from '../data/projects.json';
import { WhatIDo } from '../components/WhatIDo';
import { FooterSection } from '../components/FooterSection';
import { useRef } from 'react';

const dataProjects = data.projects;

export const Home = () => {
	const projectsSectionRef = useRef();

	return (
		<div id={styles.homeContainer}>
			<Navbar />
			<section className={styles.principalContainer}>
				<div id={styles.descriptionContainer}>
					<h1>Hi, I'm Stephanie.</h1>
					<h2>Frontend Developer and UX/UI Designer</h2>
					<section id={styles.buttonContainer}>
						<ProjectButton projectsSectionRef={projectsSectionRef} />
					</section>
				</div>
			</section>
			<section ref={projectsSectionRef}>
				{dataProjects.map(({ name, description, image, id }) => (
					<Project
						key={id}
						project={dataProjects}
						name={name}
						description={description}
						image={image}
					/>
				))}
			</section>
			<WhatIDo />
			<FooterSection />
		</div>
	);
};
