import type { NextPage } from 'next'
import { ClassOf2022Grid } from '../../components/ClassGrids'

import Layout from '../../components/Layout'
import { PlainDoublePage, PlainPage } from '../../components/Page'

import { classOf2022 } from '../../metadata'

const ClassOf2022Template: NextPage = () => {
  const chunkSize = 24;
  const array = classOf2022.sort((a, b) => (a.last > b.last) ? 1 : -1);
  let chunks: any = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  let pages = [];
  let pageNumber = 199;
  for (let i = 0; i < chunks.length; i++) {
    pages.push(
      <PlainDoublePage key={i}>
        <PlainPage
          pageNumber={pageNumber++}
          direction="left"
          title="The Class of 2022">
            <ClassOf2022Grid students={chunks[i].slice(0, 12)}/>
        </PlainPage>
        <PlainPage
          direction="right"
          pageNumber={pageNumber++}
          title="The Class of 2022">
            <ClassOf2022Grid students={chunks[i].slice(12, 24)}/>
        </PlainPage>
      </PlainDoublePage>
    )
  }

  return <Layout title="Class Of 2022">{pages}</Layout>
}

export default ClassOf2022Template
