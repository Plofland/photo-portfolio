'use client';
import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';
import Masonry, {
	ResponsiveMasonry
} from 'react-responsive-masonry';
import marcParkPhoto from 'public/photos/18.jpg';

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
					<Masonry gutter="34px">
						<ImageCard>
							{/* <Image
								src={marcParkPhoto}
								alt="test photo"
							></Image> */}
						</ImageCard>
						<ImageCard>
							{/* <Image
								src={marcParkPhoto}
								alt="test photo"
							></Image> */}
						</ImageCard>
						<ImageCard />
						<ImageCard />
						<ImageCard />
						<ImageCard />
					</Masonry>
				</ResponsiveMasonry>
			</MasonGrid>
		</main>
	);
}

const MasonGrid = styled.div`
	width: 66vw;
	display: flex;
	flex-direction: end;
`;

const ImageCard = styled.div`
	border: 1px solid blue;
	width: 500px;
	height: 500px;
	background-color: salmon;
`;
