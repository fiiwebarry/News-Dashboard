/* eslint-disable react/prop-types */

import { PiBookOpenText } from "react-icons/pi"


const NewsHub = ({ isLoading, newsHub, filteredNews }) => {


    return (
        <section>
            <div className="container mx-auto w-75%">

                <h2 className="flex ml-[190px] mt-4 font-plus-jakarta-sans font-semibold text-[35px] text-[#00415a] ">New Feeds</h2>
                {isLoading ? (<div><h2>........Loading</h2>


                </div>) : (<div className="mt-6" >{newsHub.length > 0 && filteredNews.map((news) => {

                    const { id, attributes: { headline, newsIcon, hashtags, newsSource } } = news;

                    return (<div className=" lg:flex gap-[20px] rounded border   shadow-lg  w-[330px] md:w-[900px] mx-auto mt-5 p-5" key={id}>

                        <div className=" ">
                            <img className="w-[250px]" src={newsIcon} alt="" />
                        </div>
                        <div className=" mt-[20px]">
                            <p className="font-plus-jakarta-sans font-semibold text-[30px] text-[#00719c] ">{headline}</p>
                            <div className="space-x-2">
                                {hashtags.split(",").map((hashtag, index) => {

                                    return (<span key={index} className="inline-flex font-semibold  gap-4 items-center rounded-md bg-[#00b8ff] text-[#ffff] px-2 py-1 text-xs  capitalize">

                                        #{hashtag}
                                    </span>)

                                })}
                            </div>
                            <button className=" inline-flex  mt-[10px] ml-[2px] justify-center mx-auto font-plus-jakarta-sans   w-[100px] bg-[#00415a] rounded text-[#ffff]  p-3"> {newsSource} <PiBookOpenText /></button>
                        </div>
                    </div>)


                })}</div>)}

            </div>




        </section>

    )
}

export default NewsHub
