import {IoLogoFacebook} from "react-icons/io5";
import {BsInstagram} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa6";

function FooterInfo() {
    return (
        <div className="grid grid-cols-2 gap-6">
            <div className="inline-flex">
                <span className="mr-2">
                    &copy; 2024 GetGo, Inc. All rights reserved
                </span>
                <a href="#" className="underline ml-2 mr-2 font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out">Privacy</a>
                <a href="#" className="underline ml-2 mr-2 font-semibold hover:text-blue-600 transition-all duration-300 ease-in-out">Terms</a>
            </div>
            <div className="flex justify-center">
                <a href="#" className="text-3xl hover:text-[#316ff6] transition-all duration-300 ease-in-out mr-2">
                    <IoLogoFacebook/>
                </a>
                <a href="#" className="text-3xl hover:text-[#d62976] transition-all duration-300 ease-in-out ml-2 mr-2">
                    <BsInstagram/>
                </a>
                <a href="#" className="text-3xl hover:text-[#1da1f2] transition-all duration-300 ease-in-out ml-2">
                    <FaTwitter/>
                </a>
            </div>
        </div>
    )
}

export default FooterInfo;