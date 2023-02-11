import React from 'react';
import { Link } from 'react-router-dom';
import { BsDribbble, BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from '../styles/Home.module.css';

export const Navbar = () => {
	return (
		<nav className={styles.navbarContainer}>
			<ul>
				<li>
					<Link to='/'>Portfolio</Link>
				</li>
				<li>
					<Link to='/About'>About/Contact</Link>
				</li>
			</ul>
			<h1>
				<span>Stephanie</span>
				<span>Campos</span>
			</h1>
			<div className={styles.iconsContainer}>
				<li>
					<a href='https://dribbble.com/michellecamposc_'>
						<BsDribbble />
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/stephaniecamposc/'>
						<BsLinkedin />
					</a>
				</li>
				<li>
					<a href='https://github.com/michellecamposc'>
						<BsGithub />
					</a>
				</li>
			</div>
		</nav>
	);
};
