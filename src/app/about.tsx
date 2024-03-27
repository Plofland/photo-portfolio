import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const About = () => {
	return (
		<AboutContainer>
			<Headshot></Headshot>
			{/* <Image src=""/> */}
			<Image
				src="/photos/B&WHeadshot.jpg"
				width={400}
				height={500}
				alt=""
			/>

			<TextContainer>
				<p>
					I am a software developer & photographer
					with experience and interest in the tech
					startup scene in New York City. I love
					working with newer technologies and
					building towards the future.
				</p>
				<p>
					I always love learning anything about
					software engineering whether it&apos;s a
					tool, framework, workflow enhancement or
					a new language. I particularly relish
					working in a group but am adept at
					working independently
				</p>
			</TextContainer>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const Headshot = styled.div`
	/* display: flex;
    flex-direction: column; */
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
