import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Page from '../components/Page'

const ClassTemplate: NextPage = () => {
  return (
    <Layout>
      <Page direction="left" title="Prep S"></Page>
      {/* <Page direction="right" title="Prep D"></Page> */}
    </Layout>
  )
}

export default ClassTemplate
