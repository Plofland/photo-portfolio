import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface MobileNavMenuProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
	setOpen
}) => {
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
					href="/projects"
					onClick={() => setOpen(false)}
				>
					Projects
				</MenuItem>
				<MenuItem
					href="/services"
					onClick={() => setOpen(false)}
				>
					Services
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
`;

const MobileMenu = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	position: center;
	background: rgba(0, 0, 0, 0.8);
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
	font-size: 18px;
	font-style: bold;
	margin: 8px 0 8px 0;
`;
