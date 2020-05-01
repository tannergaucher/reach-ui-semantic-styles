import React from "react"

import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog"

export default function AlertDialogExample() {
  const [showDialog, setShowDialog] = React.useState(false)
  const cancelRef = React.useRef()

  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  return (
    <div>
      <button onClick={open} className="btn">
        Delete something
      </button>
      {showDialog && (
        <AlertDialog leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>
            <h1>Please Confirm!</h1>
          </AlertDialogLabel>
          <AlertDialogDescription>
            <p>
              Are you sure you want to delete something? This action is
              permanent, and we're totally not just flipping a field called
              "deleted" to "true" in our database, we're actually deleting
              something.
            </p>
          </AlertDialogDescription>
          <div className="alert-buttons">
            <button className="btn" onClick={close}>
              Yes, delete
            </button>
            <button ref={cancelRef} onClick={close} className="btn btn-primary">
              Nevermind, don't delete.
            </button>
          </div>
        </AlertDialog>
      )}
    </div>
  )
}
