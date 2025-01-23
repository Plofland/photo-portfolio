import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MobileNavMenu = ({ setOpen }) => {
	return (
		<MobileMenuContainer>
			<MobileMenu>
				<MenuItem
					href="/"
					onClick={() => setOpen(false)}
				>
					Portfolio
				</MenuItem>
				<MenuItem
					href="/about"
					onClick={() => setOpen(false)}
				>
					About
				</MenuItem>
				<MenuItem
					href="/contact"
					onClick={() => setOpen(false)}
				>
					Contact
				</MenuItem>
			</MobileMenu>
		</MobileMenuContainer>
	);
};

export default MobileNavMenu;

const MobileMenuContainer = styled.div`
	position: relative;
	z-index: 9;

	// this fixes the mobile menu to the top having no gray 	 background, for some reason
	border: 0.25px solid gray;
`;

const MobileMenu = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	position: center;
	background: rgba(158, 158, 158, 0.8);
	backdrop-filter: saturate(180%) blur(10px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;
`;

const MenuItem = styled(Link)`
	font-size: 24px;
	font-style: bold;
	margin: 16px 0 16px 0;
	color: #f5f5f5;
	text-decoration: none;
`;
