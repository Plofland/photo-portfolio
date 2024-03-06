'use client';
import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';
import Masonry, {
	ResponsiveMasonry
} from 'react-responsive-masonry';

//rearrange these to change the order of the photos
const photos = [
  '/photos/18.jpg',
  '/photos/15-7x5-small-fav.jpg',
  '/photos/18-golf-swing.jpg',
  '/photos/28-small-4x5-1.jpg',
  '/photos/29-4x5-small.jpg',
  '/photos/31-small.jpg',
  '/photos/37-4x5-small.jpg',
  '/photos/19.jpg',
  '/photos/19.jpg'
]

export default function Home() {
	return (
		<main className={styles.main}>
			<MasonGrid>
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
                        layout="responsive" // or "fill" based on your preference
                        width={1000} // specify your desired width
                        height={600} // specify your desired height
                        style={{ width: '100%', display: 'block' }}
                        alt=""
                      />
                    ))}
					</Masonry>
				</ResponsiveMasonry>
			</MasonGrid>
		</main>
	);
}

const MasonGrid = styled.div`
	width: 66vw;
`;

const ImageCard = styled.div`
	border: 1px solid blue;
`;
