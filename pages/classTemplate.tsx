import type { NextPage } from 'next'

import Layout from '../components/Layout'
import DoublePage from '../components/Page'

const ClassTemplate: NextPage = () => {
  return (
    <Layout>
      <DoublePage title="Prep S" pageNumbers={[80, 81]}/>
    </Layout>
  )
}

export default ClassTemplate
