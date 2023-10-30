import { AiFillCloseCircle } from "react-icons/ai"
import { BiSolidCategory, BiSolidBusiness } from "react-icons/bi"
import { MdSportsVolleyball } from "react-icons/md"
import { RiMentalHealthFill, RiGlobalFill } from "react-icons/ri"
import { GrCloudComputer } from "react-icons/gr"
import { SiMediamarkt } from "react-icons/si"
const Category = [
    { id: "Entertainment", icon: <SiMediamarkt /> },
    { id: "Sports", icon: <MdSportsVolleyball /> },
    { id: "Global", icon: <RiGlobalFill /> },
    { id: "Technology", icon: <GrCloudComputer /> },
    { id: "Health", icon: <RiMentalHealthFill /> },
    { id: "Business", icon: <BiSolidBusiness /> },

];

// eslint-disable-next-line react/prop-types
const SideBar = ({ setIsOpen, setCurrentCategory }) => {
    return (
        <section className="bg-[#00415a] h-screen md:w-[250px]  fixed top-0">
            <div className="p-4">
                <div className="flex text-[35px] gap-[140px]">

                    <BiSolidCategory className="mt-3 text-[#FFFF]" />
                    <AiFillCloseCircle onClick={() => setIsOpen(false)} className="mt-3 text-[#FFFF]" />

                </div>
                <ul className="text-[30px] text-[#FFFF] mt-[40px] font-plus-jakarta-sans">
                    {Category.map((items) => {
                        const { id, icon } = items
                        return (


                            <li onClick={() => setCurrentCategory(id)} key={id} className="mt-[20px]">

                                <div className="inline-flex gap-3">
                                    <div className="mt-2 text-[]">{icon}</div>
                                    {id}
                                </div>

                            </li>



                        )

                    })}
                </ul>


            </div>

        </section>
    )
}

export default SideBar
