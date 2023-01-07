import type { NextPage } from 'next';

import Layout from '../../components/Layout';
import { PlainDoublePage, PlainPage } from '../../components/Page';

const AutographsPage: NextPage = () => {
	const title = 'Autographs';

	return (
		<Layout title={title}>
			<PlainDoublePage>
				<PlainPage
					direction='left'
					title={title}
					pageNumber={211}/>
				<PlainPage
					direction='right'
					title={title}
					pageNumber={212}/>
			</PlainDoublePage>
		</Layout>
	);
};

export default AutographsPage;
