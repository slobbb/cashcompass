import React from "react";
import '../App.css';

function Hero(){
    return(
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white h-[80vh]">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to CashCompass!</h1>
                <p className="text-lg mb-8">We can help you manage your money, because we are CashCompass!</p>
                <div className="flex justify-center gap-4">
                <a href="" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow lg hover:bg-gray-200 transition duration-300">Sign Up</a>
                <a href="" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow lg hover:bg-gray-200 transition duration-300">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;