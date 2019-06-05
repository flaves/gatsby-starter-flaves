import React from "react"
import * as PropTypes from "prop-types"

const Layout = ({ children }) => (
  <main role="main">
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
