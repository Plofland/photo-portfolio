'use client';

import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import CombinedNavMenus from './components/CombinedNavMenus';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<GlobalStyles />
				<BackgroundImage />
				<CombinedNavMenus />
				<main>{children}</main>
			</body>
		</html>
	);
}

const BackgroundImage = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-image: url('/photos/brickBG.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	z-index: -1;
`;
