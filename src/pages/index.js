import * as React from "react"
import Layout from "../components/layout"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpg"
import SEO from "../components/seo"
import QuickInfo from "../components/HomeComponents/QuickInfo"
import Gallery from "../components/HomeComponents/Gallery"
// import Menu from "../components/HomeComponents/Menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Fine Dining" subtitle="65, MG Road- Bangalore, KA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    {/* <Menu /> */}
  </Layout>
)
export default IndexPage
