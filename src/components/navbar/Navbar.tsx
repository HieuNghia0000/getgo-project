import {IoSearch} from "react-icons/io5";

function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-10 px-4 shadow-md bg-gradient-to-b from-black">
            <div className='flex items-center justify-between'>
                {/* Phần Logo */}
                <div className='flex-1'>
                    <a href="/">
                        <img src='/getgo1.png' alt='logo' id="logo"
                             className='h-10 w-fit inline-block hover:content-logo1 transition-all duration-300 ease-in-out'/>
                    </a>
                    <form className="p-4 inline-flex items-center">
                        <input
                            type="text"
                            className="p-2 border border-gray-300 rounded-md flex-grow"
                            placeholder="What's on your mind?"
                        />
                        <button className="ml-[-25px]" type="submit">
                            <span className="text-xl"><IoSearch/></span>
                        </button>
                    </form>
                </div>
                <div className='flex-6 hiddene md:flex md:items-center'>
                    <nav className='flex space-x-4'>
                        <a href='#' className='text-white px-4 hover:text-lime-300 transition-all duration-200'>
                            Guide Companion
                        </a>
                        <a href='#' className='text-white px-4 hover:text-lime-300 transition-all duration-200'>
                            Timeline
                        </a>
                        <a href='#' className='text-white px-4 hover:text-lime-300 transition-all duration-200'>
                            Travel Handbook
                        </a>
                        <a href='#' className='text-white px-4 hover:text-lime-300 transition-all duration-200'>
                            My Account
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;