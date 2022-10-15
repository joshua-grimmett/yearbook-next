import Header from './Header';
import Footer from './Footer';

import text from './text';
import { ClassLeftGrid } from './ClassGrids';

const teachers = [
  {name: 'Teacher 1', image: '/teacher1.png'},
  // {name: 'Teacher 2', image: '/teacher2.png'},
];

const classPhotos = [
  { image: '/images/0.JPG', caption: 'Mila and Harper love using their iPads.' },
  { image: '/images/3.JPG', caption: 'Play dough is the best according to Jax and Lennon.' },
  { image: '/images/1.JPG', caption: 'Jeremy and Kyrie-Cruz fishing for Red Words.' },
  { image: '/images/7.JPG', caption: 'Charlotte and Oliver relaxing in the castle.', top: '-7mm' },
  { image: '/images/6.JPG', caption: 'Ellodi, Isla and Emily enjoying the Fairy Tale Castle.' },
  { image: '/images/2.JPG', caption: 'Laura and Zoran writing their Red Words.' },
  { image: '/images/4.JPG', caption: 'Leo and Ante using play dough to strengthen their fingers.' },
  { image: '/images/5.JPG', caption: 'Chloe and Gabriella enjoying fine motor activities.' },
  { image: '/images/8.JPG', caption: 'We have had fun learning with our friends this year – Isaac, Noah and Arthur.' },
  { image: '/images/9.JPG', caption: 'Is that Spider Man or is it Jesse?' },
  { image: '/images/10.JPG', caption: 'Harleigh and Coleton hanging around.' },
  { image: '/images/11.JPG', caption: 'Sea World was the BEST!' },
  { image: '/images/12.JPG', caption: 'Arthur, Charlotte, Laura and Noah enjoying the sandpit.' },
  { image: '/images/13.JPG', caption: 'Ante, Jax and Lennon loving lunch time.' },
  { image: '/images/14.JPG', caption: 'Smiles all round – Chloe, Gabriella, Isla and Harper.' },
  { image: '/images/15.JPG', caption: 'Leo, Noah, Oliver and Jeremy having fun in the sun.' },
]

const DoublePage = ({
  title, pageNumbers
}: {
  title: string, pageNumbers: number[]
}) => {
  return (
    <div className="page">
      <LeftPage title={title} pageNumber={pageNumbers[0]}/>
    </div>
  )
}

const LeftPage = ({
  title, pageNumber
}: { title: string, pageNumber: number }) => {
  return (
    <div className="left">
      <Header direction="left" title={title}/>
      <div className="page__content">
        <ClassLeftGrid teachers={teachers} text={text} classPhotos={classPhotos}/>
      </div>
      <Footer direction="left" pageNumber={pageNumber}/>
    </div>
  )
}

export default DoublePage

export type Direction = 'left' | 'right';