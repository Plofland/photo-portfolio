'use client';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
	return (
		<ContactContainer>
			<SocialLink
				href="https://github.com/Plofland"
				target="_blank"
			>
				GitHub
			</SocialLink>
			<SocialLink
				href="https://www.linkedin.com/in/peter-lofland/"
				target="_blank"
			>
				LinkedIn
			</SocialLink>
			<SocialLink
				href="mailto:ploflan@gmail.com"
				target="_blank"
			>
				Email
			</SocialLink>
			<SocialLink
				href="https://www.instagram.com/peterlofland/"
				target="_blank"
			>
				Instagram
			</SocialLink>
		</ContactContainer>
	);
};

export default Contact;

const ContactContainer = styled.div`
	display: flex;
	width: 100vw;
	align-items: center;
	flex-direction: column;
`;

const SocialLink = styled.a`
	font-family: 'CeraPro', sans-serif;
	font-size: 24px;
	margin: 1em 0 1em 0;
`;
