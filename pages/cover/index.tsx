import type { NextPage } from "next"
import { Photo } from "../../components/ClassPhotoCards"

import Layout from "../../components/Layout"

import data from '../../public/other/cover_back/data'

const LeftPage = (props: any) => (
  <div className="left">
      <div className="relative page__content">
        <div className="grid grid-cols-3 w-[200mm] gap-[5mm] absolute">
            {
              props.images.map((image: any, index: number) => (
                <Photo key={index} photo={image} width="100%" height="39mm"/>
              ))
            }
        </div>
      </div>
  </div>
)

const CouncilTemplate: NextPage = () => {
  return (
    <Layout title={data.title}>
      <div className={`page ${data.colours}`}>
        <LeftPage {...data}/>
      </div>
    </Layout>
  )
}

export default CouncilTemplate
