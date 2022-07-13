/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./globals/navbar/Navbar"
import Footer from "../components/globals/Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body {
 font-family: 'Open Sans', sans-serif;
 color:#262626;
 background:#fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
