import { FC, MutableRefObject, useRef, useState } from "react"
import cn from "clsx"

import { ISortListItem } from "@/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getSort, setSort } from "@/redux/sort"
import useOnClickOutside from "@/hooks/useOnClickOutside"
import { sortList } from "@/utils/constants"
import { ArrowsUpDown, ChevronDown } from "@/components/icons"
import { Button } from "@/components/ui"

const s = {
  container: `relative`,
  button: `hidden md:flex justify-between items-center rounded bg-white
  border border-gray-300 font-normal text-sm capitalize w-48 pl-3 pr-2 py-2.5`,
  icon: `md:hidden outline-none cursor-pointer hover:opacity-75 transition ease-in-out duration-150`,
  list: `absolute right-0 z-10 bg-white rounded shadow text-sm min-w-[192px] py-2 mt-2`,
  listItem: `cursor-pointer px-4 py-2`,
  active: `bg-gray-200`
}

const Sort: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const sortRef = useRef(null) as MutableRefObject<HTMLDivElement | null>

  const selectedSort = useAppSelector(getSort)

  const dispatch = useAppDispatch()

  useOnClickOutside(sortRef, () => setIsOpen(false))

  const toggleSort = () => setIsOpen(!isOpen)

  const handleSort = (sort: ISortListItem) => {
    dispatch(setSort(sort))
    setIsOpen(false)
  }

  return (
    <div ref={sortRef} className={s.container}>
      <>
        <Button
          aria-label="Toggle sort options"
          className={s.button}
          onClick={toggleSort}
        >
          {selectedSort.label}
          <ChevronDown />
        </Button>

        <ArrowsUpDown
          aria-label="Toggle sort options"
          tabIndex={0}
          className={s.icon}
          onClick={toggleSort}
        />
      </>

      {isOpen ? (
        <ul className={s.list}>
          {sortList.map(({ value, label }) => (
            <li
              key={value}
              className={cn(s.listItem, {
                [s.active]: value === selectedSort.value
              })}
              onClick={() => handleSort({ value, label })}
            >
              {label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Sort
