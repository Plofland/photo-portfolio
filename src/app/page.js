'use client';
import { useState } from 'react';
import styled from 'styled-components';
import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import photos from './photoArray';

export default function Home() {
	const [selectedImage, setSelectedImage] =
		useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<MasonryContainer>
				<MasonryPhotoAlbum
					photos={photos}
					columns={(containerWidth) => {
						if (containerWidth < 400) return 1;
						if (containerWidth < 800) return 2;
						return 3;
					}}
					render={{
						image: (props) => (
							<CustomImage
								{...props}
								onClick={() => {
									setSelectedImage(
										props.src
									);
									setIsLoaded(false);
								}}
							/>
						)
					}}
				/>
			</MasonryContainer>

			{selectedImage && (
				<Overlay
					onClick={() => setSelectedImage(null)}
				>
					<EnlargedImage
						src={selectedImage}
						alt="Enlarged"
						onLoad={() => setIsLoaded(true)}
						className={isLoaded ? 'loaded' : ''}
					/>
				</Overlay>
			)}
		</>
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

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(10, 10, 10, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
`;

const EnlargedImage = styled.img`
	max-height: 90vh;
	max-width: 90vw;
	object-fit: contain;
	border-radius: 8px;
	box-shadow: 0 0 20px #00f5f5, 0 0 40px #00f5f5;
	transform: scale(0.9);
	opacity: 0;
	transition: transform 0.5s ease, opacity 0.5s ease;

	&.loaded {
		transform: scale(1);
		opacity: 1;
	}
`;
