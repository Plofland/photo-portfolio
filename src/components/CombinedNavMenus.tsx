'use client';
import React from 'react';
import styled from 'styled-components';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import MobileNavMenu from '@/components/MobileNavMenu';
import Navbar from './Navbar';

const CombinedNavMenus = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			{/* <MobileMenuIcon>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={42}
					distance="lg"
				/>
			</MobileMenuIcon>
			{isOpen && <MobileNavMenu />} */}
			{!isOpen && <Navbar />}
		</>
	);
};

export default CombinedNavMenus;

const MobileMenuIcon = styled.div``;
