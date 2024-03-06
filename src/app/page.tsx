'use client';
import Image from 'next/image';
import styles from './page.module.css';
import styled from 'styled-components';
// import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export default function Home() {
	return (
		<main className={styles.main}>
			{/* <MasonGrid>
				<ResponsiveMasonry
					columnsCountBreakPoints={{
						350: 1,
						750: 2,
						900: 3
					}}
				>
					<Masonry>
					</Masonry>
				</ResponsiveMasonry>
			</MasonGrid> */}
						<img
							src={'/photos/18.jpg'}
							alt="test photo"
						></img>
			{/* <Image
				src={'/photos/18.jpg'}
				alt="test photo"
				width={500}
				height={500}
			></Image> */}
		</main>
	);
}

const MasonGrid = styled.div``;
