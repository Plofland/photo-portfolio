import React from 'react';
import WaterWave from 'react-water-wave';
import styled from 'styled-components';

const RippleImage = () => {
	return (
		<WaterContainer>
			<WaterWave imageUrl="/photos/BWHeadshot.JPG">
				{() => (
					<TopLayerImage
						src="/photos/BWHeadshot.JPG"
						alt="Water Ripple Image"
					/>

				)}
			</WaterWave>
		</WaterContainer>
	);
};

export default RippleImage;

const WaterContainer = styled.div`
	border: 1px solid skyblue;
`;

const TopLayerImage = styled.img`
  opacity: .25;
`;
