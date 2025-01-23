'use client';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
	return (
		<ContactContainer>
			<SocialButtons>
				<SocialLink
					href="https://github.com/Plofland"
					target="_blank"
				>
					<TextContainer>GitHub</TextContainer>
				</SocialLink>
				<SocialLink
					href="https://www.linkedin.com/in/peter-lofland/"
					target="_blank"
				>
					<TextContainer>LinkedIn</TextContainer>
				</SocialLink>
				<SocialLink
					href="mailto:ploflan@gmail.com"
					target="_blank"
				>
					<TextContainer>Email</TextContainer>
				</SocialLink>
				<SocialLink
					href="https://www.instagram.com/peterlofland/"
					target="_blank"
				>
					<TextContainer>Instagram</TextContainer>
				</SocialLink>
			</SocialButtons>
		</ContactContainer>
	);
};

export default Contact;

const ContactContainer = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
`;

const SocialButtons = styled.div`
	display: flex;
	width: 60vw;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin: 4em 0 4em 0;

	@media (min-width: 751px) {
		width: 100vw;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2em;
	}
`;

const SocialLink = styled(Link)`
	font-family: 'CeraPro', sans-serif;
	font-size: 24px;
	text-decoration: none;
	text-align: center;
	@media (max-width: 750px) {
		width: 100%;
		padding-bottom: 1em;
	}
`;

const TextContainer = styled.div`
	padding: 0.5em 0.5em 0.5em 0.5em;
	margin: 0.25em 0 0.25em 0%;
	border: 2px solid whitesmoke;
	border-radius: 5px;
	transition: transform 0.2s ease;
	color: whitesmoke;

	&:hover {
		transform: scale(1.05);
	}
`;
