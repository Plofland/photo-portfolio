'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import photos from './photoArray';

export default function Home() {
	const [columnNumber, setColumnNumber] = useState(1);

	useEffect(() => {
		// Function to determine column numbers based on window width
		const updateColumns = () => {
			const width = window.innerWidth;
			if (width >= 1248) {
				setColumnNumber(4);
			} else if (width >= 800) {
				setColumnNumber(2);
			} else {
				setColumnNumber(1);
			}
		};

		// Initial update
		updateColumns();

		// Event listener for resizing
		window.addEventListener('resize', updateColumns);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', updateColumns);
		};
	}, []);

	return (
		<MasonryContainer>
			<MasonryPhotoAlbum
				photos={photos}
				columns={columnNumber}
			/>
		</MasonryContainer>
	);
}

const MasonryContainer = styled.div`
	width: 90vw;
	margin: auto;
	margin-top: 24px;
`;
