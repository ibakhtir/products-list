import { FC } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closeModal, getModalDisplay, getModalView } from "@/redux/modal"
import { Button } from "@/components/ui"
import { Cross } from "@/components/icons"
import { AddForm } from "@/components/common/forms"

const s = {
  wrapper: `fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]
  overflow-y-auto overflow-x-hidden p-4 md:p-0`,
  container: `flex items-center justify-center w-full min-h-screen`,
  modal: `bg-white rounded shadow-lg w-full md:max-w-lg`,
  headerContainer: `flex items-center justify-between border-b p-4`,
  title: `font-medium text-xl text-gray-900`,
  content: `p-4`
}

const Modal: FC = () => {
  const modalDisplay = useAppSelector(getModalDisplay)
  const modalView = useAppSelector(getModalView)

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  return modalDisplay ? (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal} role="dialog">
          {/* Header */}
          <div className={s.headerContainer}>
            <h5 className={s.title}>
              {modalView === "ADD_VIEW" && "New Product"}
              {modalView === "EDIT_VIEW" && "Edit"}
              {modalView === "DELETE_VIEW" && "Delete"}
            </h5>
            <Button
              aria-label="Close modal"
              variant="naked"
              onClick={handleClose}
            >
              <Cross />
            </Button>
          </div>

          {/* Body */}
          <div className={s.content}>
            {modalView === "ADD_VIEW" && <AddForm onClose={handleClose} />}
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
