import styled from 'styled-components';
import { MasonryPhotoAlbum } from 'react-photo-album';
import photos from './photoArray';

const MasonryGrid = () => {
	return (
		<MasonryPhotoAlbum photos={photos} columns={4} />
	);
};

export default MasonryGrid;

const ImageContainer = styled.div`
	overflow: hidden;
`;
