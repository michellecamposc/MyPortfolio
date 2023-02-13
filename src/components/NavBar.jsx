import React from 'react';
import { Link } from 'react-router-dom';
import { BsDribbble, BsLinkedin, BsGithub } from 'react-icons/bs';
import styles from '../styles/Home.module.css';

export const Navbar = () => {
	return (
		<nav className={styles.navbarContainer}>
			<ul>
				<Link to='/'>Portfolio</Link>
				<Link to='/About'>About/Contact</Link>
			</ul>
			<h1>
				<span>Stephanie</span>
				<span>Campos</span>
			</h1>
			<div className={styles.iconsContainer}>
				<li>
					<a href='https://dribbble.com/michellecamposc_' target='_blank'>
						<BsDribbble
							style={{
								width: '1.6rem',
								height: '1.6em',
								color: '#2B313E',
							}}
						/>
					</a>
				</li>
				<li>
					<a href='https://dribbble.com/michellecamposc_' target='_blank'>
						<BsLinkedin
							style={{
								width: '1.6rem',
								height: '1.6em',
								color: '#2B313E',
							}}
						/>
					</a>
				</li>
				<li>
					<a href='https://github.com/michellecamposc' target='_blank'>
						<BsGithub
							style={{
								width: '1.6rem',
								height: '1.6em',
								color: '#2B313E',
							}}
						/>
					</a>
				</li>
			</div>
		</nav>
	);
};
