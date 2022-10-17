import type { NextPage } from 'next'
import { classes } from '../metadata';

import Layout from '../components/Layout'
import DoublePage, { LargeDoublePage, PhotoDoublePage, LongDoublePage } from '../components/Page'

const ClassTemplate: NextPage = () => {
  return (
    <Layout>
      {
        classes.map((c, i) => {
          /**
           * Double Pages (4x2)
           */
          if (c.type === 'xlp') {
            return <>
              <LargeDoublePage
                className={c.colours}
                key={i}
                title={c.title}
                teachers={c.teachers}
                question={c.question || 'When I grow up I want to be...'}
                tableText={c.tableText}
                tableTextStyle={c.tableTextStyle}
                classPhotos={c.classPhotos}
                poster={c.posters[0]}
                pageNumbers={c.pageNumbers}
                text={c.text}
                textStyle={c.textStyle}/>
              <PhotoDoublePage
                className={c.colours}
                title={c.title}
                teachers={c.teachers}
                poster={c.posters[1]}
                classPhotos={c.classPhotos.slice(16)}
                pageNumbers={c.pageNumbers}
                />
            </>
          } else if (c.type === 'xl') {
            return <>
              <LongDoublePage
                className={c.colours}
                key={i}
                title={c.title}
                teachers={c.teachers}
                question={c.question || 'When I grow up I want to be...'}
                tableText={c.tableText}
                tableTextStyle={c.tableTextStyle}
                classPhotos={c.classPhotos}
                poster={c.posters[0]}
                pageNumbers={c.pageNumbers}
                text={c.text}
                textStyle={c.textStyle}/>
              <PhotoDoublePage
                className={c.colours}
                title={c.title}
                teachers={c.teachers}
                poster={c.posters[1]}
                classPhotos={c.classPhotos.slice(8)}
                pageNumbers={c.pageNumbers}/>
            </>
          }
          /**
           * Normal Pages (1x2)
           */
          return <DoublePage
            className={c.colours}
            key={i}
            title={c.title}
            teachers={c.teachers}
            question={c.question || 'When I grow up I want to be...'}
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
