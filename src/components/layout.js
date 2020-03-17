import React from "react"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <header className="header padding">
      <h1 className="title">Reach UI Semantic Styles</h1>
    </header>
    <main>{children}</main>
  </>
)

export default Layout
