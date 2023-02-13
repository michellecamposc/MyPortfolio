import React from 'react';
import styles from '../styles/Home.module.css';

export const ProjectButton = ({ projectsSectionRef }) => {
	// Allows you to scroll to a specific section on the page.
	const handleClick = () => {
		projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<button
				className={styles.projectButton}
				type='button'
				onClick={() => handleClick()}
			>
				See my work below
			</button>
		</>
	);
};
