import { FC, FormEvent, useEffect, useCallback, useState } from "react"

import { IInputValue } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { createProduct } from "@/redux/products"
import { checkIsEmpty, checkErrors } from "@/utils/helpers"
import { Button, TextField } from "@/components/ui"

interface IAddForm {
  onClose: () => void
}

const s = {
  form: `flex flex-col space-y-4`,
  numbers: `flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2`,
  btnContainer: `pt-4`
}

const initialData = {
  name: "",
  imageUrl: "",
  count: 0,
  weight: 0
}

const initialSize = {
  width: 0,
  height: 0
}

const errorsState = {
  name: "",
  imageUrl: "",
  count: "",
  weight: "",
  width: "",
  height: ""
}

const AddForm: FC<IAddForm> = ({ onClose }) => {
  const [data, setData] = useState(initialData)
  const [size, setSize] = useState(initialSize)
  const [errors, setErrors] = useState(errorsState)
  const [isValid, setIsValid] = useState(true)

  const dispatch = useAppDispatch()

  const validate = useCallback(() => {
    const foundErrors = checkIsEmpty({ ...data, ...size })
    const errorsStatus = checkErrors(foundErrors)

    setErrors(foundErrors)

    return errorsStatus
  }, [data, size])

  useEffect(() => {
    if (isValid === false) validate()
  }, [data, size, isValid, validate])

  const handleChangeData = (target: IInputValue) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleChangeSize = (target: IInputValue) => {
    setSize((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const isValidData = validate()

    if (isValidData) {
      dispatch(
        createProduct({
          ...data,
          weight: `${data.weight}g`,
          size: {
            width: size.width,
            height: size.height
          }
        })
      )

      onClose()
    } else {
      setIsValid(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField
        name="name"
        value={data.name}
        label="Name"
        error={errors.name}
        onChange={handleChangeData}
      />
      <TextField
        name="imageUrl"
        value={data.imageUrl}
        label="Image URL"
        error={errors.imageUrl}
        onChange={handleChangeData}
      />
      <div className={s.numbers}>
        <TextField
          type="number"
          name="count"
          value={data.count}
          label="Count"
          error={errors.count}
          onChange={handleChangeData}
        />
        <TextField
          type="number"
          name="weight"
          value={data.weight}
          label="Weight"
          error={errors.weight}
          onChange={handleChangeData}
        />
        <TextField
          type="number"
          name="width"
          value={size.width}
          label="Width"
          error={errors.width}
          onChange={handleChangeSize}
        />
        <TextField
          type="number"
          name="height"
          value={size.height}
          label="Height"
          error={errors.height}
          onChange={handleChangeSize}
        />
      </div>
      <div className={s.btnContainer}>
        <Button
          type="submit"
          aria-label="Add new product"
          disabled={!checkErrors(errors)}
        >
          Create
        </Button>
      </div>
    </form>
  )
}

export default AddForm
