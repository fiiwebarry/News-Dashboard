import { AiFillCloseCircle } from "react-icons/ai"


// eslint-disable-next-line react/prop-types
const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <section className="bg-[blue] h-screen md:w-[250px]  fixed top-0">
            <div className="p-4">
                <div className="flex text-[35px] gap-4">
                    <h2 className="text-[#FFFF]">CATEGORIES</h2>
                    <AiFillCloseCircle onClick={() => setIsOpen(false)} className="mt-3 text-[#FFFF]" />

                </div>


                <ul className="text-[30px] text-[#FFFF] mt-[40px] font-plus-jakarta-sans">
                    <li className="mt-[20px]">Entertainment</li>
                    <li className="mt-[20px]">Sports</li>
                    <li className="mt-[20px]">Global</li>
                    <li className="mt-[20px]">Technology</li>
                    <li className="mt-[20px]">Health</li>
                    <li className="mt-[20px]">Business</li>

                </ul>

            </div>

        </section>
    )
}

export default SideBar
