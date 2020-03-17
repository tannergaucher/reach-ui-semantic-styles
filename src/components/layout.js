import React from "react"

import "./layout.css"

import { useSiteMetadata } from "../hooks"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <header className="header padding">
        <h1 className="title">{title}</h1>
      </header>
      <main className="main">{children}</main>
      <footer className="footer padding">
        <h2 className="title">{title}</h2>
      </footer>
    </>
  )
}

export default Layout
