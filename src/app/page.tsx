'use client';
import styled from 'styled-components';
import MasonryGrid from '@/app/MasonryGrid';

export default function Home() {
	return (
		<MasonryContainer>
			<MasonryGrid />
		</MasonryContainer>
	);
}

const MasonryContainer = styled.div`
	width: 66vw;
	margin-top: 24px;
`;
