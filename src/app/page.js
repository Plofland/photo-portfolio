'use client';
import styled from 'styled-components';
import MasonryGrid from './MasonryGrid';

export default function Home() {
	return (
		<MasonryContainer>
			<MasonryGrid />
		</MasonryContainer>
	);
}

const MasonryContainer = styled.main`
	width: 66vw;
	margin-top: 24px;
`;
