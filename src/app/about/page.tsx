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
					width={400}
					height={500}
					alt="Black and white headshot of Peter looking off camera"
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
`;
const Headshot = styled.div`
	/* display: flex;
    flex-direction: column; */
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 0 8em 0 8em;
`;
const Paragraph = styled.div`
	padding: 2em 0 2em 0;
`;
