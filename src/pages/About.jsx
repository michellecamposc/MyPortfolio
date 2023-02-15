import React from 'react';
import { Navbar } from '../components/NavBar';
import styles from '../styles/About.module.css';
import { FooterSection } from '../components/FooterSection';

export const About = () => {
	return (
		<div id={styles.aboutContainer}>
			<Navbar />
			<h2>About me</h2>
			<section className={styles.descriptionContainer}>
				<p>
					Hi, my name is Stephanie 👋🏻 <br />
					I'm a Frontend Developer with a background in UX/UI design. My path in
					the technological world began after studying medicine for a couple of
					years. I discovered that my true passion was in programming and
					design, where I can combine my creative and organized side. <br />
					<br />I love working on projects that have a real impact on society
					and I am always looking for new challenges and opportunities to grow
					and learn.
				</p>
				<figure className={styles.photoContainer}>
					<img src='/public/images/stephanieCampos.jpg' />
				</figure>
			</section>
			<FooterSection />
		</div>
	);
};
