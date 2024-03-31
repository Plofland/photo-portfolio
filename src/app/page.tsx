'use client';
import styles from './page.module.css';
import styled from 'styled-components';
import MasonryGrid from '@/components/MasonryGrid';
import RippleImage from '@/components/RippleImage';

export default function Home() {
	return (
		<main className={styles.main}>
			<MasonryContainer>
				<MasonryGrid />
			</MasonryContainer>
			{/* <RippleImage /> */}
		</main>
	);
}

const MasonryContainer = styled.div`
	width: 66vw;
	margin-top: 24px;
`;
