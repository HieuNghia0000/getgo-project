function Footer() {
    return (
        <div className="grid grid-cols-4 gap-8">
            {/*Logo*/}
            <div className="flex flex-col items-center">
                <img src="/getgo-footer.png" alt="getgofooter" className="h-20 w-fit"/>
                <div className="mb-1">
                    <span className="text-xl font-bold uppercase">Your Travel Companion</span>
                </div>
            </div>

            {/*About GetGo*/}
            <div className="text-md">
                <div className="mb-2 mt-1">
                    <span className="text-[#969696] uppercase">About GetGo</span>
                </div>
                <div className="flex justify-between mb-3">
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">About Us</a>
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Term and Conditions</a>
                </div>
                <div className="flex justify-between mt-3">
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Become A Partner</a>
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Website Feedback</a>
                </div>
            </div>

            {/*Contact Us*/}
            <div className="text-md">
                <div className="mb-2 mt-1">
                    <span className="text-[#969696] uppercase">Contact Us</span>
                </div>
                <div className="flex justify-between mb-3">
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Customer Support</a>
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Our Policies</a>
                </div>
                <div className="flex justify-between mt-3">
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Become A Partner</a>
                    <a href="#" className="hover:text-blue-600 transition-all duration-300 ease-in-out">Frequenly Asked</a>
                </div>
            </div>

            {/*Payment Method*/}
            <div>
                <div className="mb-2 mt-1">
                    <span className="text-[#969696] uppercase">Payment Method</span>
                </div>
                <div className="mt-2">
                    <img src="/payment-method/payment-method.png" alt="payment-method"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;