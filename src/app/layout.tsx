import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import CombinedNavMenus from '@/components/CombinedNavMenus';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Peter',
	description:
		'Software engineering & photography portfolio'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<CombinedNavMenus />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
