'use client';
import React from 'react';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import MobileNavMenu from './MobileNavMenu';
import Navbar from './Navbar';

const CombinedNavMenus = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<Navbars>
			<MobileMenuIcon>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={28}
					distance="lg"
					rounded
				/>
			</MobileMenuIcon>
			{isOpen && <MobileNavMenu setOpen={setOpen} />}
			<NavbarContainer>
				<Navbar />
			</NavbarContainer>
		</Navbars>
	);
};

export default CombinedNavMenus;

const Navbars = styled.div`
	position: relative;
`;

const MobileMenuIcon = styled.div`
	// icon layout
	display: flex;
	justify-content: flex-end;
	padding: 8px;
	position: fixed;
	z-index: 10;
	top: 1px;
	right: 1px;
	color: #f5f5f5;

	// icon visual flair
	.hamburger-react > div {
		div {
			box-shadow: 0 0 5px #f5f5f5, 0 0 10px #00f5f5,
				0 0 20px #00f5f5, 0 0 40px #00f5f5;
		}
	}

	@media screen and (min-width: 750px) {
		display: none;
	}
`;

const NavbarContainer = styled.div`
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
