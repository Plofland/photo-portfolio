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
			<Navbar />
		</>
	);
};

export default CombinedNavMenus;

const MobileMenuIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 16px;
	background-color: ${({ isOpen }) =>
		isOpen
			? 'rgba(55, 55, 55, 0.8)'
			: 'rgba(0, 0, 0, 0)'};

	@media screen and (max-width: 750px) {
        display: none;
	}
`;
