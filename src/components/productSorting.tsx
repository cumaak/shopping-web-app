import React, { useState } from "react";
import { HiSortDescending } from "react-icons/hi";
interface IProductSorting {
  sortKey: string,
  setSortKey: React.Dispatch<React.SetStateAction<string>>
}
const ProductSorting: React.FC<IProductSorting> = ({ sortKey, setSortKey }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)} className='relative flex border-2 rounded px-4 py-2 mx-1 mb-3 text-sm w-48 active:border-orange-600 cursor-pointer'>
      {sortKey == '' ? "Sort by" : sortKey}
      <HiSortDescending size={20} className="ml-auto mt-0.5 text-orange-600" />
      <div className={`${isOpen == true ? "flex" : "hidden"} fixed lg:absolute items-end lg:items-stretch bg-black lg:bg-transparent bg-opacity-50 z-20 w-screen h-screen left-0 top-0 lg:-left-[166px] lg:-top-[130px] overflow-hidden`}>
        <ul className="flex flex-col justify-evenly lg:absolute w-full lg:w-48 h-40 px-4 py-2 bg-white top-44 left-[164px] lg:rounded shadow-md border">
          <li onClick={() => setSortKey("Highest Price")}>Highest Price</li>
          <li onClick={() => setSortKey("Lowest Price")}>Lowest Price</li>
          <li onClick={() => setSortKey("Highest Rating")}>Highest Rating</li>
          <li onClick={() => setSortKey("Lowest Rating")}>Lowest Rating</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductSorting