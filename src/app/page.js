'use client';
import styled from 'styled-components';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import photos from './photoArray';

export default function Home() {
	return (
		<MasonryContainer>
			<MasonryPhotoAlbum
				photos={photos}
				columns={4}
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
