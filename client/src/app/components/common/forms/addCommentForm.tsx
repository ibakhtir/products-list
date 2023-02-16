import { FC, FormEvent, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { IInputValue } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { createComment } from "@/redux/comments"
import { checkIsEmpty, checkErrors } from "@/utils/helpers"
import { Button, TextAreaField } from "@/components/ui"

const s = {
  btnContainer: `text-right`,
  button: `bg-black text-white rounded hover:opacity-75 py-2.5 px-8 mt-2`
}

const initialState = {
  description: ""
}

const errorsState = {
  description: ""
}

const AddCommentForm: FC = () => {
  const [data, setData] = useState(initialState)
  const [errors, setErrors] = useState(errorsState)
  const [isValid, setValid] = useState(true)

  const { productId }: { productId: string } = useParams()

  const dispatch = useAppDispatch()

  const validate = useCallback(() => {
    const foundErrors = checkIsEmpty(data)
    const errorsStatus = checkErrors(foundErrors)

    setErrors(foundErrors)

    return errorsStatus
  }, [data])

  useEffect(() => {
    if (isValid === false) validate()
  }, [data, isValid, validate])

  const clearForm = () => {
    setData(initialState)
    setErrors(errorsState)
    setValid(true)
  }

  const handleChange = (target: IInputValue) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const isValidData = validate()

    if (isValidData) {
      dispatch(createComment({ ...data, productId }))

      clearForm()
    } else {
      setValid(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextAreaField
        name="description"
        value={data.description}
        label="New Comment"
        error={errors.description}
        onChange={handleChange}
      />
      <div className={s.btnContainer}>
        <Button type="submit" aria-label="Add comment" className={s.button}>
          Publish
        </Button>
      </div>
    </form>
  )
}

export default AddCommentForm
