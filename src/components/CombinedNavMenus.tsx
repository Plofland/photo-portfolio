'use client';
import React from 'react';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import MobileNavMenu from '@/components/MobileNavMenu';
import Navbar from './Navbar';

const CombinedNavMenus = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	return (
		<>
			<MobileMenuIcon>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={32}
					distance="lg"
				/>
			</MobileMenuIcon>
			{isOpen && <MobileNavMenu setOpen={setOpen} />}
			<NavbarContainer>
				<Navbar />
			</NavbarContainer>
		</>
	);
};

export default CombinedNavMenus;

const MobileMenuIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 16px;

	@media screen and (min-width: 750px) {
		display: none;
	}
`;

const NavbarContainer = styled.div`
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
