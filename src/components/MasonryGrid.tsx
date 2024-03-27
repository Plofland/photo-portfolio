import Image from 'next/image';
import Masonry, {
	ResponsiveMasonry
} from 'react-responsive-masonry';

//rearrange these to change the order of the photos
const photos = [
	'/photos/PAL_1730_4x5_headshot.jpg',
	'/photos/29-4x5-small.jpg',
	'/photos/15-7x5-small-fav.jpg',
	'/photos/13--f1.4-1_8sec4x5.jpg',
	'/photos/PAL_0827.jpg',
	'/photos/PAL_1477-2.jpg',
	'/photos/18.jpg',
	'/photos/18-golf-swing.jpg',
	'/photos/PAL_1985.jpg',
	'/photos/PAL_0782-1x1.jpg',
	'/photos/PAL_2078.jpg',
	'/photos/PAL_1990.jpg'
];

const MasonryGrid = () => {
	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{
				350: 1,
				750: 2,
				900: 3
			}}
		>
			<Masonry gutter="12px">
				{photos.map((image, i) => (
					<Image
						key={i}
						src={image}
						layout="responsive"
						width={1000}
						height={600}
						style={{
							width: '100%',
							display: 'block'
						}}
						alt=""
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default MasonryGrid;
