'use client';
import styled from 'styled-components';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import photos from './photoArray';

export default function Home() {
	const columnNumber = 
		(window.innerWidth >= 1248 ? 4 : 
			(window.innerWidth >= 800 ? 2 : 1));
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

	/* border: 1px solid red; */
`;
