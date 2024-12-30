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
	display: flex;
	justify-content: flex-end;
	padding: 8px;
	position: fixed;
	z-index: 10;
	top: 1px;
	right: 1px;

	@media screen and (min-width: 750px) {
		display: none;
	}
`;

const NavbarContainer = styled.div`
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
