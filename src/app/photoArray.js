
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
	{
		src: '/photos/PAL_1730_4x5_headshot.jpg',
		width: 800,
		height: 1000,
		alt: 'PAL_1730_4x5_headshot.jpg PLACEHOLDER'
	},
	{
		src: '/photos/29-4x5-small.jpg',
		width: 800,
		height: 1000,
		alt: '29-4x5-small.jpg PLACEHOLDER'
	},
	{
		src: '/photos/15-7x5-small-fav.jpg',
		width: 1000,
		height: 714,
		alt: '15-7x5-small-fav.jpg PLACEHOLDER'
	},
	{
		src: '/photos/13--f1.4-1_8sec4x5.jpg',
		width: 800,
		height: 1000,
		alt: '13--f1.4-1_8sec4x5.jpg PLACEHOLDER'
	},
	{
		src: '/photos/PAL_0827.jpg',
		width: 663,
		height: 1000,
		alt: 'PAL_0827.jpg PLACEHOLDER'
	},
	{
		src: '/photos/PAL_1477-2.jpg',
		width: 750,
		height: 1000,
		alt: 'PAL_1477-2.jpg PLACEHOLDER'
	},
	{
		src: '/photos/PAL_1990.jpg',
		width: 750,
		height: 1000,
		alt: 'PAL_1990.jpg PLACEHOLDER'
	},
	{
		src: '/photos/18.jpg',
		width: 663,
		height: 1000,
		alt: '18.jpg PLACEHOLDER'
	},
	{
		src: '/photos/18-golf-swing.jpg',
		width: 663,
		height: 1000,
		alt: '18-golf-swing.jpg PLACEHOLDER'
	},
	{
		src: '/photos/PAL_1985.jpg',
		width: 1000,
		height: 750,
		alt: 'PAL_1985.jpg PLACEHOLDER'
	},
	{
		src: '/photos/PAL_0782-1x1.jpg',
		width: 1000,
		height: 1000,
		alt: 'PAL_0782-1x1.jpg PLACEHOLDER'
	},
	{
		src: '/photos/PAL_2078.jpg',
		width: 800,
		height: 1000,
		alt: 'PAL_2078.jpg PLACEHOLDER'
	},
].map(({ src, alt, width, height }) => ({
	src,
	alt,
	width,
	height,
	srcSet: breakpoints.map((breakpoint) => ({
		src,
		width: breakpoint,
		height: Math.round((height / width) * breakpoint)
	}))
}));

export default photos;
