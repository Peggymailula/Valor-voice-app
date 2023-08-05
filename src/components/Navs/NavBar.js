import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io"
import { BiFullscreen } from "react-icons/bi";


const Head = () => {
    return (
        <header className="md:flex md:items-center md:justify-between p-4 h-16 pb-0 shadow-lg md:pb-4 w-screen bg-gray-300 sm:w-screen" >

            <div className="flex-row items-center justify-between  md:mb-0 text-blue-600 lg:flex">

                <CgMenuGridR className="w-8 h-12 md:w-1/2" />
            </div>

            <nav className="flex-row">
                <ul className="list-reset md:flex md:items-center sm:items-end">
                    <li className="md:ml-4 sm:mr-12">
                        <form className=" md:mb-0 md:w-1/4 sm:w-1/6">
                            <label className="hidden" >Search</label>
                            <input className="bg-grey-lightest focus:border-orange  rounded-full shadow-inner " placeholder="  Search..." type="text" />

                        </form>

                    </li>
                    <li className="md:ml-4 text-gray-600 text-xl">
                        <BiFullscreen />

                    </li>
                    <li className="md:ml-4 text-gray-500 text-xl">
                        <IoMdNotifications />
                    </li>
                </ul>
                <br />
            </nav>


        </header>
    )
}


export default Head