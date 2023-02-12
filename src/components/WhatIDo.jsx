import React from 'react';

export const WhatIDo = () => {
	return (
		<>
			<section>
				<h1>
					<span>What I</span>
					<span>do.</span>
				</h1>
				<article>
					<div>
						<figure>
							<img src='../images/designHome.png' alt='UX/UI designer' />
						</figure>
						<h2> UX/UI Design</h2>
						<p>
							I create attractive and efficient digital solutions that stand out
							with their impactful and intuitive design, following the basic
							principles of user-centered visual design.
						</p>
					</div>

					<div>
						<figure>
							<img src='../images/developmentHome.png' alt='Web development' />
						</figure>
						<h2> Web development</h2>
						<p>
							I utilize advanced technologies such as
							<span>HTML, CSS, JavaScript and React</span> for the creation of
							responsive mobile applications and websites.
						</p>
					</div>
				</article>
			</section>
		</>
	);
};
