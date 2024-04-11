import Header from "./Header"
import Footer from "./Footer"
import { FaLink } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

const Home = ({user}) => {
    useEffect(()=>{
        document.title='ShortLinkify'
    },[])

    const navigate=useNavigate()

    return (
        <div className='min-h-screen flex flex-col'>
            <Header user={user}/>
            <section className="flex-grow">
                <div className="grid md:grid-rows-1 md:grid-cols-2">
                    <div className="content px-6 md:px-16 mt-12 leading-7 justify-center flex flex-col order-last md:order-first">
                        <h2 className="font-bold text-3xl py-3 text-teal italic">Shortlink generator by ShortLinkify</h2>
                        <p>ShortLinkify helps you create concise and shareable links for your long URLs. Simplify your links and track their usage effortlessly.</p>
                        <button className="cursor-pointer font-semibold p-2 mt-3 bg-teal border-none text-white w-fit" onClick={()=>navigate('/url')}>Get Started</button>
                    </div>
                    <div className="image px-6 mt-4 sm:mt-12 place-items-center grid order-first md:order-last">
                        <img src="link.svg" alt="short url" className="w-[30rem]" />
                    </div>
                </div>
                <div className="features mt-12 px-3 py-8 bg-custom-color">
                    <h2 className="font-bold text-2xl text-center">Easy way to short a link</h2>
                    <div className="advantages flex justify-evenly items-center flex-wrap mt-10 sm:gap-3 gap-10">
                        <div className="link">
                            <div className="grid place-items-center w-64">
                                <FaLink className="text-teal text-3xl"/>
                                <p className="text-center py-3">Enter the url to get your short link in 1 click.</p>
                            </div>
                        </div>
                        <div className="stats">
                            <div className="grid place-items-center w-64">
                                <IoStatsChartSharp className="text-teal text-3xl"/>
                                <p className="pt-3 text-center">Check the number of clicks that your shortened URL received.</p>
                            </div>
                        </div>
                        <div className="no-payment">
                            <div className="grid place-items-center w-64">
                                <FaRegCreditCard className="text-teal text-3xl"/>
                                <p className="pt-3 text-center">Free to use. No card required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>)
}
export default Home