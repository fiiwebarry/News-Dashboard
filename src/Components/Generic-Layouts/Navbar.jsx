/* eslint-disable react/prop-types */

import { GiHamburgerMenu } from "react-icons/gi"
import { SiSimilarweb } from "react-icons/si"
import { TbWorldSearch } from "react-icons/tb"
import { useState } from "react"
import SideBar from "./SideBar"

const Navbar = ({ setCurrentCategory, keyword, setKeyword, }) => {

    const [isOpen, setIsOpen] = useState(false);




    const togglebtn = () => {

        return (
            setIsOpen(!isOpen)
        )
    }
    return (
        <section>
            <nav className="shadow shadow-blue-500/40">
                <div className=" p-5 flex  md:gap-[350px] text-[40px]">
                    <div className="flex gap-3">
                        <button onClick={togglebtn} className="mt-3">
                            <GiHamburgerMenu className="text-[#00415a]" />
                        </button>
                        <div className="mt-2">
                            <p className="text-[#00415a] md:flex hidden">Menu</p>
                        </div>
                    </div>

                    <div className="flex mt-2 gap-1" >
                        <span className=" hidden md:flex md:justify-center  text-[#00415a]  font-plus-jakarta-sans">News-Hub</span>
                        <SiSimilarweb className="text-[#00415a] md:flex hidden" />
                        <div className="relative">
                            <TbWorldSearch className="absolute md:top-[14px] top-[15px] md:left-[54px] left-[30px w-[25px] text-[#ffff]" />
                            <input type="text" className=" md:w-[300px]  w-[200px] h-[40px] md:ml-[50px] ml-[30px] md:mb-0 mb-5 text-[20px] text-[white] bg-[#00415a] border-[blue] rounded  px-8 md:px-11 z-11" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="search keyword" />
                        </div>

                    </div>



                </div>

            </nav>
            {isOpen && <SideBar className="fixed " isOpen={isOpen} setIsOpen={setIsOpen} setCurrentCategory={setCurrentCategory} />}

        </section >

    )
}

export default Navbar
