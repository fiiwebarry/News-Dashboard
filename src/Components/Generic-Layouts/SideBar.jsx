import { AiFillCloseCircle } from "react-icons/ai"


const SideBar = () => {
    return (
        <section className="bg-[blue] h-screen w-[300px] fixed top-0">
            <div className="p-6">
                <div className="flex text-[35px] gap-4">
                    <h2 className="">CATEGORIES</h2>
                    <AiFillCloseCircle className="mt-3" />

                </div>


                <ul className="text-[30px] text-[#FFFF] ">
                    <li>Entertainment</li>
                    <li>Sports</li>
                    <li>Global</li>
                    <li>Technology</li>
                    <li>Health</li>
                    <li>Business</li>

                </ul>

            </div>

        </section>
    )
}

export default SideBar
