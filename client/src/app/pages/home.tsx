import { useAppDispatch } from "@/redux/hooks"
import { openModal } from "@/redux/modal"
import { Button } from "@/components/ui"

const s = {
  container: `flex flex-col pt-5 pb-20`,
  header: `flex justify-between items-center h-16`,
  title: `font-medium text-lg`,
  buttonsContainer: `flex justify-center items-center space-x-4`,
  button: `bg-black text-white rounded hover:opacity-75 py-2.5 px-4`
}

const Home = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h5 className={s.title}>Products</h5>
        <div className={s.buttonsContainer}>
          <Button
            aria-label="Open modal"
            className={s.button}
            onClick={() => dispatch(openModal())}
          >
            New Product
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
