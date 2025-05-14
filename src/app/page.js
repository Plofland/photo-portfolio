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
				columns={(containerWidth) => {
					if (containerWidth < 400) return 1;
					if (containerWidth < 800) return 2;
					return 4;
				}}
				render={{
					image: (props) => (
						<CustomImage {...props} />
					)
				}}
			/>
		</MasonryContainer>
	);
}

const MasonryContainer = styled.div`
	width: 90vw;
	margin: auto;
	margin-top: 24px;

	@media screen and (max-width: 750px) {
		width: 80vw;
		margin-top: 64px;
	}
`;

const CustomImage = styled.img`
	transition: transform 0.3s ease;
	width: 100%;
	height: auto;
	display: block;

	&:hover {
		transform: scale(1.05);
	}
`;
