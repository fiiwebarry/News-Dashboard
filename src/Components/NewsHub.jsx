
import AxiosApi from "../Axios-Api/Axios-Api"
import { PiBookOpenText } from "react-icons/Pi"
import { useState, useEffect } from "react"

const NewsHub = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [newsHub, setNewsHub] = useState([])

    const getNewsHub = async () => {

        try {
            setIsLoading(true)
            const response = await AxiosApi.get("/news-datas")

            setNewsHub(response.data.data)
            if (response.status === 200) {
                setIsLoading(false)
            }

        }

        catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {

        getNewsHub();
    }, [])

    return (
        <section>
            <div className="container mx-auto w-75%">
                {isLoading ? (<div><h2>........Loading</h2>


                </div>) : (<div className="mt-6" >{newsHub.length > 0 && newsHub.map((news) => {

                    const { id, attributes: { headline, newsIcon, hashtags, newsSource } } = news;

                    return (<div className=" lg:flex gap-10 rounded border bg-white shadow-lg  w-[330px] md:w-[900px] mx-auto mt-5 p-5" key={id}>

                        <div>
                            <img className="w-[250px]" src={newsIcon} alt="" />
                        </div>
                        <div className=" mt-[20px]">
                            <p className="font-plus-jakarta-sans font-semibold text-[30px] text-[#00F]">{hashtags}</p>
                            <p className="text-[24px] md:w-[600px] w-[250px] text-[#0A0A29]">{headline}</p>

                            <button className=" mt-[10px] ml-[2px] flex justify-center mx-auto font-plus-jakarta-sans   w-[100px] bg-[#00F] rounded text-[#ffff]  p-3"> {newsSource} <PiBookOpenText /></button>
                        </div>









                    </div>)


                })}</div>)}

            </div>




        </section>

    )
}

export default NewsHub
