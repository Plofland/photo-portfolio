declare module 'react-water-wave' {
	import * as React from 'react';

	interface WaterWaveProps {
		imageUrl: string;
        dropRadius?: number;
        perturbance?: number;
        resolution?: number;
        interactive?: boolean;
        crossOrigin?: string;
		children?: () => React.ReactNode; 
	}
	type WaterWaveRef = {
        pause: () => void;
        play: () => void;
        hide: () => void;
        show: () => void;
        drop: (params: { x: number; y: number; radius: number; strength: number }) => void;
        destroy: () => void;
        set: (params: { property: string; value: any }) => void;
        updateSize: () => void;
    };

	const WaterWave: React.ForwardRefExoticComponent<WaterWaveProps & React.RefAttributes<WaterWaveRef>>;

	export default WaterWave;
}
