
import { GiHamburgerMenu } from "react-icons/gi"
import { SiSimilarweb } from "react-icons/si"
import { useState } from "react"
import SideBar from "./SideBar"

const Navbar = ({ setCurrentCategory }) => {

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

                    <div className="flex mt-2" >
                        <p className="flex md:justify-center  text-[#00415a]  font-plus-jakarta-sans">News-Hub</p>
                        <SiSimilarweb className="text-[#00415a]" />

                    </div>



                </div>

            </nav>
            {isOpen && <SideBar className="fixed" isOpen={isOpen} setIsOpen={setIsOpen} setCurrentCategory={setCurrentCategory} />}

        </section >

    )
}

export default Navbar
