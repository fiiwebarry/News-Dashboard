
import { GiHamburgerMenu } from "react-icons/gi"
import { SiSimilarweb } from "react-icons/si"
import { useState } from "react"
import SideBar from "./SideBar"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const togglebtn = () => {

        return (
            setIsOpen(!isOpen)
        )
    }
    return (
        <section>
            <nav className="shadow shadow-blue-500/40">
                <div className="container mx-auto w-[90%] p-5 flex  md:gap-[350px] text-[40px]">
                    <div className="flex gap-3">
                        <button onClick={togglebtn} className="mt-3">
                            <GiHamburgerMenu className="text-[#00F]" />
                        </button>
                        <div>
                            <p className="text-[#00F] md:flex hidden">Menu</p>
                        </div>
                    </div>

                    <div className="flex" >
                        <p className="flex md:justify-center  text-[#00F]  font-plus-jakarta-sans">News-Hub</p>
                        <SiSimilarweb className="text-[#00F]" />
                    </div>

                </div>

            </nav>
            {isOpen && <SideBar className="fixed" isOpen={isOpen} setIsOpen={setIsOpen} />}

        </section>

    )
}

export default Navbar
