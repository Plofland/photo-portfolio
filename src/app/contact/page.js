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
	justify-content: center;

	@media (max-width: 750px) {
		height: 100vh;
	}
`;

const SocialButtons = styled.div`
	display: flex;
	width: 50vw;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin: 4em 0 4em 0;

	@media (min-width: 751px) {
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
	color: whitesmoke;
	text-shadow: 0 0 4px #f5f5f5;

	@media (min-width: 750px) {		
		&:hover {
			transform: scale(1.05);
			box-shadow: 0 0 10px #f5f5f5, 0 0 20px #00f5f5,
				0 0 40px #00f5f5, 0 0 80px #00f5f5,
				0 0 120px #00f5f5, inset 0 0 10px #f5f5f5,
				inset 0 0 5px #00f5f5,
				inset 0 0 40px #00f5f5;
			transition: ease-in-out 0.2s;
		}
	}
`;
