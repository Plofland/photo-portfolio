'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<Container>
			<NavItem href="/" rel="noopener noreferrer">
				<NavName>Portfolio</NavName>
			</NavItem>
			<NavItem
				href="/about"
				rel="noopener noreferrer"
			>
				<NavName>About</NavName>
			</NavItem>
			{/* <NavItem
				href="/projects"
				rel="noopener noreferrer"
			>
				<NavName>Projects</NavName>
			</NavItem>
			<NavItem
				href="/services"
				rel="noopener noreferrer"
			>
				<NavName>Services</NavName>
			</NavItem> */}
			<NavItem
				href="/contact"
				rel="noopener noreferrer"
			>
				<NavName>Contact</NavName>
			</NavItem>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	display: flex;
	grid-template-columns: repeat(4, minmax(25%, auto));
	max-width: 100vw;
	width: 100%;
	justify-content: center;
	align-items: flex-end;
	margin: 6em 0 2em 0;
	/* border: 2px solid white; */
`;

const NavName = styled.h2`
	position: relative;

	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: white;
		transition: width 0.7s ease;
	}

	&:hover:before {
		width: 100%;
	}

	/* border: 1px solid yellowgreen; */
`;

const NavItem = styled(Link)`
	position: relative;
	padding: 0.5em 2em 0.5em 2em;
	text-decoration: none;
	font-family: 'CeraPro', sans-serif;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;

	h2 {
		margin: 0;
	}
`;
