import React from "react"

import "./layout.css"

import { useSiteMetadata } from "../hooks"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <header className="header">
        <h1 className="title padding" style={{ marginTop: `var(--space-lg)` }}>
          {title}
        </h1>
      </header>
      <main className="main">{children}</main>
      <footer className="footer padding">
        <h2 className="title">{title}</h2>
      </footer>
    </>
  )
}

export default Layout
