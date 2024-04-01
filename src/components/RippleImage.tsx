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
	console.log({ props });
	return (
		<WaterWave
			imageUrl={props.src}
			// @ts-ignore
			style={{
				backgroundSize: 'cover'
			}}
			//this actually effects the water animation
			dropRadius={10}
			perturbance={0.02}
			interactive={true}
		>
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
	);
};

export default RippleImage;

const TopLayerImage = styled.img`
	opacity: 0.25;
`;
