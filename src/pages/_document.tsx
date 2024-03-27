import type {
	DocumentContext,
	DocumentInitialProps
} from 'next/document';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

//this file is an attempt to prevent an unstyled page from loading - remove if I can't get it working
export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<App {...props} />
						)
				});

			const initialProps =
				await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}
}
