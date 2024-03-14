import Header from "./header/Header.tsx";
import {useEffect, useState} from "react";
import {FaArrowRightLong} from "react-icons/fa6";
import {GoStarFill} from "react-icons/go";
import LocationCarousel from "./carousel/LocationCarousel.tsx";
import Footer from "./footer/Footer.tsx";
import FooterInfo from "./footer/FooterInfo.tsx";

function HomePage() {
    const [attractionsChecked, setAttractionsChecked] = useState(false);
    const [greatFoodChecked, setGreatFoodChecked] = useState(false);

    const repeatedElements = Array.from({ length: 5});

    const handleAttractionsCheckboxChange = () => {
        setAttractionsChecked(!attractionsChecked);
    }

    const handleGreatFoodCheckboxChange = () => {
        setGreatFoodChecked(!greatFoodChecked);
    }

    useEffect(() => {
        document.title = "GetGo Travel Companion";
    })

    return (
        <div className="">
            <Header/>
            <main className="min-w-fit rounded-t-3xl bg-white shadow-md mt-[-20px]">
                <div className="px-6 py-4">
                    {/*Ai Companion*/}
                    <div className="mb-2">
                        <div className="mb-1">
                            <span className="text-[#969696]">AI COMPANION</span>
                        </div>
                        <div className="mt-1 mb-4">
                            <span className="font-bold text-2xl">
                                Not sure what to do? Plan your trip with AI
                            </span>
                        </div>
                        <div className="mt-2">
                            <form action="/search" method="get">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <span className="font-bold">How do you want to spend your time?</span>
                                        <div className="mt-2">
                                            <label htmlFor="attractions" className="hover:cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={attractionsChecked}
                                                    onChange={handleAttractionsCheckboxChange}
                                                    className="form-checkbox rounded-full text-lime-500 focus:ring-0 hidden"
                                                    name="attractions"
                                                    id="attractions"
                                                    value="attractions"
                                                />
                                                <span
                                                    className={`bg-${attractionsChecked ? 'lime-500' : 'white'} ml-2 transition-all duration-200 px-4 py-1 rounded-full ${attractionsChecked ? 'border-lime-500' : ''} border-2`}
                                                >
                                                  Must-see Attractions
                                                </span>
                                            </label>

                                            <label htmlFor="greatFood" className="hover:cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={greatFoodChecked}
                                                    onChange={handleGreatFoodCheckboxChange}
                                                    className="form-checkbox rounded-full text-lime-500 focus:ring-0 hidden"
                                                    name="greatFood"
                                                    id="greatFood"
                                                    value="greatFood"
                                                />
                                                <span
                                                    className={`bg-${greatFoodChecked ? 'lime-500' : 'white'} ml-2 transition-all duration-200 px-4 py-1 rounded-full ${greatFoodChecked ? 'border-lime-500' : ''} border-2`}
                                                >
                                              Great Food
                                            </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <span className="font-bold">Write down your ideal trip!</span>
                                        </div>
                                        <div className="mb-2 relative">
                                            <textarea placeholder="Write something..." name="ideal"
                                                      className="outline-none w-full resize-none h-[80px] rounded-xl p-2 shadow-inner"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        className="flex items-center bg-[#DCF167] hover:bg-[#253FF7] px-2 py-1 rounded-md hover:text-white transition-all duration-200"
                                        type="submit">
                                        <span className="mr-1">
                                            See Your Options
                                        </span>
                                        <span className="ml-1">
                                            <FaArrowRightLong/>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/*Explore*/}
                    <div className="mb-2">
                        <div className="mb-1">
                            <span className="text-[#969696] uppercase">Explore</span>
                        </div>
                        <div className="mt-1 mb-4">
                            <span className="font-bold text-2xl">
                                Discover your next favorite destinations
                            </span>
                        </div>
                        <div className="mt-2">
                            <div className="grid grid-cols-4 gap-6">
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square relative rounded-2xl overflow-hidden">
                                    <img src="/explore/trending.png" alt="Trending"
                                         className="object-cover w-full h-full blur-sm hover:blur-none transition-all duration-700 ease-in-out hover:cursor-pointer"/>
                                    <div className="absolute bottom-4 left-6 p-2 text-white">
                                        <span className="text-3xl">Trending</span>
                                    </div>
                                </div>
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square relative rounded-2xl overflow-hidden">
                                    <img src="/explore/cuisine.png" alt="Cuisine"
                                         className="object-cover w-full h-full blur-sm hover:blur-none transition-all duration-700 ease-in-out hover:cursor-pointer"/>
                                    <div className="absolute bottom-4 left-6 p-2 text-white">
                                        <span className="text-3xl">Cuisine</span>
                                    </div>
                                </div>
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square relative rounded-2xl overflow-hidden">
                                    <img src="/explore/nature.png" alt="Nature"
                                         className="object-cover w-full h-full blur-sm hover:blur-none transition-all duration-700 ease-in-out hover:cursor-pointer"/>
                                    <div className="absolute bottom-4 left-6 p-2 text-white">
                                        <span className="text-3xl">Nature</span>
                                    </div>
                                </div>
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square relative rounded-2xl overflow-hidden">
                                    <img src="/explore/culture.png" alt="Culture"
                                         className="object-cover w-full h-full blur-sm hover:blur-none transition-all duration-700 ease-in-out hover:cursor-pointer"/>
                                    <div className="absolute bottom-4 left-6 p-2 text-white">
                                        <span className="text-3xl">Culture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Seasonal Events*/}
                    <div className="mb-2">
                        <div className="flex justify-between items-center">
                            <div className="max-w-2xl">
                                <div className="mb-1">
                                    <span className="text-[#969696] uppercase">Seasonal Events</span>
                                </div>
                                <div className="mt-1 mb-4">
                                    <span className="font-bold text-2xl">
                                        Latest offers this season
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-md">
                                        Introducing our latest travel adventure! Embark on unforgettable journeys, discover hidden gems, and create lasting memories with our newest offerings. Explore the world with us and let the adventure begin!
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <img src="/adventure.png" alt="Adventure" className="rounded-xl"/>
                            </div>
                        </div>
                    </div>

                    {/*Promotion*/}
                    <div className="mb-2">
                        <div className="mb-1">
                            <span className="text-[#969696] uppercase">Promotion</span>
                        </div>
                        <div className="mt-1 mb-4">
                            <span className="font-bold text-2xl">
                                Check out our most favourite packages
                            </span>
                        </div>
                        <div className="mt-2">
                            <div className="grid grid-cols-4 gap-6">
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square">
                                    <img src="/promotion/promotion1.png" alt="Promotion1"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="mb-1 mt-2">
                                        <span className="text-xl font-bold">Small-group explore Hanoi food street tour with guide</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="inline-flex">
                                            {repeatedElements.map((_, index) => (
                                                <div key={index} className="inline-flex">
                                                    <span className="text-[#DCF167] text-xl">
                                                        <GoStarFill/>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="inline-flex">
                                            <span className="">Start from 20$</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square">
                                    <img src="/promotion/promotion2.png" alt="Promotion2"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="mb-1 mt-2">
                                        <span className="text-xl font-bold">Saigon tours: culture and sightseeing on xích lô</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="inline-flex">
                                            {repeatedElements.map((_, index) => (
                                                <div key={index} className="inline-flex">
                                                    <span className="text-[#DCF167] text-xl">
                                                        <GoStarFill/>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="inline-flex">
                                            <span className="">Start from 25$</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square">
                                    <img src="/promotion/promotion3.png" alt="Promotion3"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="mb-1 mt-2">
                                        <span className="text-xl font-bold">Experience the life of Saigon natives by the railways</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="inline-flex">
                                            {repeatedElements.map((_, index) => (
                                                <div key={index} className="inline-flex">
                                                    <span className="text-[#DCF167] text-xl">
                                                        <GoStarFill/>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="inline-flex">
                                            <span className="">Start from 15$</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-span-3 sm:col-span-1 aspect-square">
                                    <img src="/promotion/promotion4.png" alt="Promotion4"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="mb-1 mt-2">
                                        <span className="text-xl font-bold">Van Gogh art exhibition with Immersive 720 (include tickets)</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="inline-flex">
                                            {repeatedElements.map((_, index) => (
                                                <div key={index} className="inline-flex">
                                                    <span className="text-[#DCF167] text-xl">
                                                        <GoStarFill/>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="inline-flex">
                                            <span className="">Start from 20$</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Read more*/}
                    <div className="mb-2 mt-4">
                        <div className="mb-1">
                            <span className="text-[#969696] uppercase">Read More</span>
                        </div>
                        <div className="mt-1 mb-4">
                            <span className="font-bold text-2xl">
                                Explore different lifestyles
                            </span>
                        </div>
                        <div className="mt-2">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-1 aspect-video relative">
                                    <img src="/read-more/caobang.png" alt="caobang"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                                        <span className="text-white text-xl">Life of the Mountains in Cao Bang</span>
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-1 aspect-video relative">
                                    <img src="/read-more/nhatrang.png" alt="nhatrang"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                                        <span className="text-white text-xl">Hidden Civilization in Nha Trang</span>
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-1 aspect-video relative">
                                    <img src="/read-more/hcmcity.png" alt="hcmcity"
                                         className="object-cover w-full h-full rounded-2xl overflow-hidden"/>
                                    <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                                        <span className="text-white text-xl">Night Life in Ho Chi Minh City</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Carousel*/}
                    <div className="mb-2 mt-8">
                        <LocationCarousel/>
                    </div>

                    {/*Footer*/}
                    <div className="mt-4">
                        <Footer/>
                        <div className="border-b border-black mt-2 mb-2"></div>
                        <FooterInfo/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;