import React from 'react';
import WaterWave from 'react-water-wave';
import styled from 'styled-components';

interface rippleImageProps {
	src: string;
	layout:
		| 'fill'
		| 'responsive'
		| 'fixed'
		| 'intrinsic'
		| undefined;
	width: number | string;
	height: number | string;
	alt?: string;
}

const RippleImage = (props: rippleImageProps) => {
	return (
		<WaterContainer>
			<WaterWave imageUrl={props.src}>
				{() => (
					<TopLayerImage
						src={props.src}
						alt="Water Ripple Image"
						style={{
							width: '100%',
							display: 'block'
						}}
					/>
				)}
			</WaterWave>
		</WaterContainer>
	);
};

export default RippleImage;

const WaterContainer = styled.div`
	border: 1px solid skyblue;
	/* width: 100%;
  display: block; */
`;

const TopLayerImage = styled.img`
	opacity: 0.25;
`;
