import type { NextPage } from 'next'
import HonourRoll from '../components/HonourRoll'

import Layout from '../components/Layout'
import { PlainDoublePage, PlainPage } from '../components/Page'

import { honourRoll } from '../metadata'

const ClassOf2022Template: NextPage = () => {
  const title = "Staff Honour Roll";
  
  return <Layout title={title}>
    <PlainDoublePage>
      <PlainPage direction="left" title={title} pageNumber={0}>
        <HonourRoll staff={honourRoll} buffer={2} headers={honourRoll[0]}/>
      </PlainPage>
    </PlainDoublePage>
  </Layout>
}

export default ClassOf2022Template
