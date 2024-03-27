import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MobileNavMenu = () => {
	return (
		<MobileMenu >
			<MenuItem id="about" href="/about">
				About
			</MenuItem>
			<MenuItem id="projects" href="/projects">
				Projects
			</MenuItem>
			<MenuItem href="/services">Services</MenuItem>
			<MenuItem id="contact" href="/contact">
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

