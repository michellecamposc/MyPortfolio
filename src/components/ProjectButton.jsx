import React from 'react';
import styles from '../styles/Home.module.css';

export const ProjectButton = ({ projectsSectionRef }) => {
	const handleClick = () => {
		projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<button className={styles.projectButton} onClick={() => handleClick()}>
				See my work below
			</button>
		</>
	);
};
