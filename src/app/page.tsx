'use client';
import styles from './page.module.css';
import styled from 'styled-components';
import MasonryGrid from '@/components/MasonryGrid';

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
	border: 1px solid blue;
`;

