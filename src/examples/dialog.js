import React, { useState } from "react"

import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

export default function DialogExample() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div>
      <button onClick={open} className="btn">
        Open Dialog
      </button>
      <Dialog isOpen={showDialog} onDismiss={close} aria-label="test">
        <button className="btn" onClick={close} style={{ border: `none` }}>
          <span aria-hidden>×</span>
        </button>
        <h1>Hello There</h1>
        <p>I'm a dialog.</p>
      </Dialog>
    </div>
  )
}
