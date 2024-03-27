import React from 'react';
import styled from 'styled-components';

const About = () => {
	return (
		<TextContainer>
			<p>
				I am a software developer & photographer
				with experience and interest in the tech
				startup scene in New York City. I love
				working with newer technologies and building
				towards the future.
			</p>
			<p>
				I always love learning anything about
				software engineering whether it's a tool,
				framework, workflow enhancement or a new
				language. I particularly relish working in a
				group but am adept at working independently
			</p>
		</TextContainer>
	);
};

export default About;

const TextContainer = styled.div`
	display: flex;
    flex-direction: column;
`;
