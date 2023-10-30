/* eslint-disable react/prop-types */

import { GiHamburgerMenu } from "react-icons/gi"
import { SiSimilarweb } from "react-icons/si"
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
                        <span className=" md:justify-center  text-[#00415a]  font-plus-jakarta-sans">News-Hub</span>
                        <SiSimilarweb className="text-[#00415a]" />
                        <div>
                            <input type="text" className="w-[300px]  h-[40px] ml-[30px] bg-[#fff4] rounded p-3" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="search keyword" />
                        </div>

                    </div>



                </div>

            </nav>
            {isOpen && <SideBar className="fixed" isOpen={isOpen} setIsOpen={setIsOpen} setCurrentCategory={setCurrentCategory} />}

        </section >

    )
}

export default Navbar
