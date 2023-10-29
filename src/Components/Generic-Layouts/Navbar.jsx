
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
                <div className="container mx-auto w-[85%] p-5 flex gap-[350px] text-[40px]">
                    <div className="flex gap-3">
                        <button onClick={togglebtn} className="mt-3">
                            <GiHamburgerMenu />
                        </button>
                        <div>
                            <p>Menu</p>
                        </div>
                    </div>

                    <div className="flex" >
                        <p className="flex justify-center">News-Hub</p>
                        <SiSimilarweb />
                    </div>

                </div>

            </nav>
            {isOpen && <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />}

        </section>

    )
}

export default Navbar
