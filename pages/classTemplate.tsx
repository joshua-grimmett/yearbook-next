import type { NextPage } from 'next'
import { classes } from '../metadata';

import Layout from '../components/Layout'
import DoublePage from '../components/Page'

const ClassTemplate: NextPage = () => {
  return (
    <Layout>
      {
        classes.map((c, i) => (
          <DoublePage
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
        ))
      }
    </Layout>
  )
}

export default ClassTemplate
