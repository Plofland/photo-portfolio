import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MobileNavMenu = (
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
	return (
		<MobileMenu>
			<MenuItem
				href="/portfolio"
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
	);
};

export default MobileNavMenu;

const MobileMenu = styled.div`
	width: 100vw;
	height: 100vh;
	position: center;
	background-color: rgba(55, 55, 55, 0.8);
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
