import type { NextPage } from 'next';

import Layout from '../../components/Layout';
import { PlainDoublePage, PlainPage } from '../../components/Page';

const SchoolAerialPhotographPage: NextPage = () => {
	const title = 'School Aerial Photograph';

	return (
		<Layout title={title}>
			<PlainDoublePage>
				<PlainPage
					direction='left'
					title={title}
					pageNumber={211}>
						<div className="absolute top-[53mm] w-[188mm]">
							<img src="/aerial.png" alt="Aerial photograph of the school" className="w-full"/>
						</div>
					</PlainPage>
			</PlainDoublePage>
		</Layout>
	);
};

export default SchoolAerialPhotographPage;
