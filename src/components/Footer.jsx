import React from "react";
import '../App.css';
import { FaVk } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">CashCompass</h2>
                        <p className="text-gray-400"> © {new Date().getFullYear()} CashCompass. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="" className="hover:text-gray-400">
                            <FaVk size={24}/>
                        </a>
                        <a href="" className="hover:text-gray-400">
                            <FaTwitter size={24}/>
                        </a>
                        <a href="" className="hover:text-gray-400">
                            <FaInstagram size={24}/>
                        </a>
                        <a href="" className="hover:text-gray-400">
                            <FaTelegram size={24}/>
                        </a>
                    </div>
                </div>
                <div className="mt-4">
                    <ul className="flex flex-col md:flex-row space-x-0 md:space-x-8">
                        <li className="hover:text-gray-400">Home</li>
                        <li className="hover:text-gray-400">About</li>
                        <li className="hover:text-gray-400">Services</li>
                        <li className="hover:text-gray-400">Contact</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;