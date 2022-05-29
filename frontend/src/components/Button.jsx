import { ChevronDoubleRightIcon } from "@heroicons/react/solid"


  
export default function Button({ children, actionFunction }) { 
    return <button className=" text-gray-200 bg-gradient-to-br from-sky-600 to-sky-400 px-4 text-xl py-2 font-bold rounded-3xl w-full mt-2 relative scale-100
    hover:scale-110 ease-in duration-150 shadow-md shadow-sky-700/70 hover:shadow-pink-700/40 group" onClick={(e) => actionFunction(e)}>
      <div className="w-full ease-in-out duration-300 float-none overflow-clip
      group-hover:w-3
      group-hover:float-right
      group-hover:overflow-hidden
      ">{children}</div>
      <div className="z-0 w-5 h-[100%] bg-pink-500 absolute top-0 left-0 rounded-l-3xl ease-in-out duration-300 flex align-middle
      group-hover:w-64
      group-hover:rounded-3xl
      group-hover:bg-gradient-to-r from-pink-500 to-amber-500
      group-hover:justify-center
      ">
            <ChevronDoubleRightIcon className="w-4 invisible opacity-70 group-hover:visible" />
            <ChevronDoubleRightIcon className="w-5 invisible opacity-80 group-hover:visible" />
            <ChevronDoubleRightIcon className="w-6 invisible group-hover:visible" />
        </div>
    </button>
  }