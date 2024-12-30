'use client';

import GlobalStyles from './globalStyles';
import CombinedNavMenus from './components/CombinedNavMenus';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<GlobalStyles />
				<CombinedNavMenus />
				<main>{children}</main>
			</body>
		</html>
	);
}
