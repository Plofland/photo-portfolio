'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const About = () => {
	return (
		<AboutContainer>
			<Headshot>
				<Image
					src="/photos/BWHeadshot.jpg"
					alt="Black and white headshot of Peter looking off camera"
					sizes="500px"
					fill
					style={{
						objectFit: 'contain'
					}}
				/>
			</Headshot>

			<TextContainer>
				<Paragraph>
					I am a software developer & photographer
					with experience and interest in the tech
					startup scene in New York City. I love
					working with newer technologies and
					building towards the future.
				</Paragraph>

				<Paragraph>
					I always love learning anything about
					software engineering whether it&apos;s a
					tool, framework, workflow enhancement or
					a new language. I particularly relish
					working in a group but am adept at
					working independently
				</Paragraph>
			</TextContainer>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 66vw;
	margin: auto;
	/* border: 1px solid blue; */

	@media screen and (max-width: 750px) {
		width: 100vw;
	}
`;

const Headshot = styled.div`
	position: relative; 
	width: 750px; 
	height: 600px;
	
	@media screen and (max-width: 750px) {
		width: 500px;
		height: 400px;
	}
	
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 0 8em 0 8em;

	@media screen and (max-width: 750px) {
		width: 80vw;
	}
	@media screen and (min-width: 1440px) {
		width: 40vw;
	}
`;

const Paragraph = styled.div`
	padding: 2em 0 2em 0;
`;
