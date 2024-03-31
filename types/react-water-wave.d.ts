declare module 'react-water-wave' {
	import * as React from 'react';

	interface WaterWaveProps {
		imageUrl: string;
        dropRadius?: number;
        perturbance?: number;
        resolution?: number;
        interactive?: boolean;
        crossOrigin?: string;
	}

	const WaterWave: React.FC<WaterWaveProps>;

	export default WaterWave;
}
