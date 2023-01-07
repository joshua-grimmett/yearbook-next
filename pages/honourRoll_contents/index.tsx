import type { NextPage } from 'next';
import HonourRoll from '../../components/HonourRoll';

import Layout from '../../components/Layout';
import { PlainDoublePage, PlainPage } from '../../components/Page';

import { honourRoll, contents } from '../../metadata';

type ContentsLine = {
	pageNumber: number;
	pageQuantity: number;
	name: string;
};

const ClassOf2022Template: NextPage = () => {
	const titles = ['Staff Honour Roll', 'Contents'];

	return (
		<Layout title={titles.join(' & ')}>
			<PlainDoublePage>
				<PlainPage
					direction='left'
					title={titles[0]}
					pageNumber={2}>
					<HonourRoll
						staff={honourRoll}
						buffer={2}
						headers={honourRoll[0]}
					/>
				</PlainPage>
				<PlainPage
					direction='right'
					title={titles[1]}
					pageNumber={3}>
					<div className='absolute top-[53mm] w-[180mm] max-h-[225mm]'>
            <div className="grid grid-cols-2 gap-x-4">
              <ContentsColumn lines={contents.slice(0, contents.length/2)} />
              <ContentsColumn lines={contents.slice(contents.length/2)} />
            </div>
          </div>
				</PlainPage>
			</PlainDoublePage>
		</Layout>
	);
};

export default ClassOf2022Template;

const ContentsColumn = ({ lines }: { lines: ContentsLine[] }) => (
	<div className='grid'>
		{lines.map((line: ContentsLine, key: number) => (
			<div
				className='flex flex-row justify-between text-[10.5pt] leading-[13.5pt] font-light'
				key={key}>
				<span>{line.name}</span>
				<span>{line.pageNumber}</span>
			</div>
		))}
	</div>
);
