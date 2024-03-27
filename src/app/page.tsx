'use client';
import styles from './page.module.css';
import styled from 'styled-components';
import MasonryGrid from '@/components/MasonryGrid';
import Navbar from '@/components/Navbar';
//todo get this library ⬇️
// import { Squash as Hamburger } from 'hamburger-react';

export default function Home() {
	return (
		<main className={styles.main}>
			{/* <MobileMenuIcon>
					<Hamburger
						toggled={isOpen}
						toggle={setOpen}
						size={42}
						distance="lg"
					/>
				</MobileMenuIcon>
				{isOpen && <p>TRUE</p>}
				{isOpen && <MobileNavMenu />} */}
			<Navbar />
			<MasonryContainer>
				<MasonryGrid />
			</MasonryContainer>
		</main>
	);
}

const MasonryContainer = styled.div`
	width: 66vw;
	/* border: 1px solid blue; */
`;

// const MobileMenuIcon = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	padding: 16px;
// 	background-color: ${({ isOpen }) =>
// 		isOpen
// 			? 'rgba(55, 55, 55, 0.8)'
// 			: 'rgba(0, 0, 0, 0)'};
// `;
