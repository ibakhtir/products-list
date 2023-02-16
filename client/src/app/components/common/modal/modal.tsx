import { FC } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closeModal, getModalDisplay, getModalView } from "@/redux/modal"
import useLockedBody from "@/hooks/useLockedBody"
import { Cross } from "@/components/icons"
import { Button } from "@/components/ui"
import { AddForm, DeleteForm } from "@/components/common/forms"

const s = {
  wrapper: `fixed inset-0 z-10 overflow-y-auto bg-black/30 backdrop-blur-[1px]`,
  container: `flex justify-center items-center min-h-full p-4`,
  modal: `bg-white rounded shadow-lg w-full md:max-w-lg`,
  headerContainer: `flex items-center justify-between border-b p-4`,
  title: `font-medium text-xl text-gray-900`,
  content: `p-4`
}

const Modal: FC = () => {
  const modalDisplay = useAppSelector(getModalDisplay)
  const modalView = useAppSelector(getModalView)

  const dispatch = useAppDispatch()

  useLockedBody(modalDisplay)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return modalDisplay ? (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.modal} role="dialog">
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

          <div className={s.content}>
            {modalView === "ADD_VIEW" && <AddForm onClose={handleClose} />}
            {modalView === "DELETE_VIEW" && (
              <DeleteForm onClose={handleClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
