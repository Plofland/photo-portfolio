'use client';
import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';
import Masonry from 'react-responsive-masonry';
import marcParkPhoto from 'public/photos/18.jpg';

export default function Home() {
	return (
		<main className={styles.main}>
			<MasonGrid>

					<Masonry columnsCount={2} gutter='24px'>
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
