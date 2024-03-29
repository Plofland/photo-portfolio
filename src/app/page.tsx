'use client';
import styles from './page.module.css';
import styled from 'styled-components';
import MasonryGrid from '@/components/MasonryGrid';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<main className={styles.main}>
			<MasonryContainer>
				<MasonryGrid />
			</MasonryContainer>
		</main>
	);
}

const MasonryContainer = styled.div`
	width: 66vw;
	margin-top: 24px;
`;
