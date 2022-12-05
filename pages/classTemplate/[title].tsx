import type { NextPage } from 'next'
import { classes } from '../../metadata';

import Layout from '../../components/Layout'
import DoublePage, { LargeDoublePage, PhotoDoublePage, LongDoublePage, PlainPage } from '../../components/Page'
import { useRouter } from 'next/router';

const ClassTemplate: NextPage = () => {
  const router = useRouter();
  const ids: string[] = Object.keys(classes).filter(c => c === router.query.title);
  const list: any[] = ids.map((c: string) => classes[c]);

  const defaultQuestion = 'When I grow up I want to be...';
  return (
    <Layout title={list[0]?.title ?? ''}>
      {
        list.map((c, i) => {
          /**
           * Double Pages (4x2)
           */
          if (c.type === 'xlp') {
            return <div key={i}>
              <LargeDoublePage
                className={c.colours}
                key={i}
                title={c.title}
                teachers={c.teachers}
                question={c.question || defaultQuestion}
                tableText={c.tableText}
                tableTextStyle={c.tableTextStyle}
                classPhotos={c.classPhotos}
                poster={c.posters[0]}
                pageNumbers={c.pageNumbers}
                previousPagePhotoAllocations={[]}
                pagePhotoAllocations={c.pagePhotoAllocations?.slice(0, 2) || [5, 4]}
                text={c.text}
                textStyle={c.textStyle}/>
              <PhotoDoublePage
                className={c.colours}
                title={c.title}
                teachers={c.teachers}
                poster={c.posters[1]}
                previousPagePhotoAllocations={c.pagePhotoAllocations?.slice(0, 2) || [5, 4]}
                pagePhotoAllocations={c.pagePhotoAllocations?.slice(2, 4) || [12, 12]}
                classPhotos={c.classPhotos}
                pageNumbers={c.pageNumbers.slice(2, 4)}/>
            </div>
          } else if (c.type === 'xl') {
            return <div key={i}>
              <LongDoublePage
                className={c.colours}
                key={i}
                title={c.title}
                teachers={c.teachers}
                question={c.question || defaultQuestion}
                tableText={c.tableText}
                tableTextStyle={c.tableTextStyle}
                classPhotos={c.classPhotos}
                poster={c.posters[0]}
                pageNumbers={c.pageNumbers}
                previousPagePhotoAllocations={[]}
                pagePhotoAllocations={c.pagePhotoAllocations?.slice(0, 2) || [5, 4]}
                text={c.text}
                textStyle={c.textStyle}/>
              <PhotoDoublePage
                className={c.colours}
                title={c.title}
                teachers={c.teachers}
                poster={c.posters[1]}
                previousPagePhotoAllocations={c.pagePhotoAllocations?.slice(0, 2) || [5, 4]}
                pagePhotoAllocations={c.pagePhotoAllocations?.slice(2, 4) || [12, 12]}
                classPhotos={c.classPhotos}
                pageNumbers={c.pageNumbers.slice(2, 4)}/>
            </div>
          }
          /**
           * Normal Pages (1x2)
           */
          return <DoublePage
            className={c.colours}
            key={i}
            title={c.title}
            teachers={c.teachers}
            question={c.question || defaultQuestion}
            tableText={c.tableText}
            tableTextStyle={c.tableTextStyle}
            classPhotos={c.classPhotos}
            poster={c.poster}
            pageNumbers={c.pageNumbers}
            text={c.text}
            textStyle={c.textStyle}/>
        })
      }
    </Layout>
  )
}

export default ClassTemplate
