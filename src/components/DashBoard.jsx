import React from "react";
import '../App.css';
import { FaBeer } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import BarChart from './BarChart';
import PieChart from "./Piechart";
function DashBoard() {
    return (
        <>
            <div className="bg-black pl-36 pt-5">
                <h2 className="text-3xl font-bold text-white">My DashBoard</h2>
            </div>
            <div className="flex h-screen justify-center bg-black">
                <div className="flex flex-col w-1/3 p-4">
                    <div className="h-[35vh] mb-4 p-4 text-white flex flex-col bg-[url('./img/totalbg.jpg')] bg-cover bg-no-repeat justify-center rounded-lg">
                        <h2 className="text-xl font-bold pb-5 text-black">Total balance</h2>
                        <p className="text-5xl pb-5 text-black">120,456.50$</p>
                        <p className="text-sm text-black">+2,456 revenue from last month</p>
                    </div>
                    <div className="h-1/2 text-white flex  bg-gradient-to-r from-gray-800 to-gray-600 items-center justify-center rounded-lg">
                    <BarChart/>
                    </div>
                </div>
                
                <div className="flex flex-col w-1/5 p-4">
                    <div className=" mb-4 text-white flex gap-4 flex-col items-center justify-center">
                        <div className="flex flex-col p-4 bg-gradient-to-r from-gray-800 to-gray-600 h-[9.5rem] w-[100%] rounded-lg justify-center">
                            <h2 className="text-md font-semi-bold pb-5">Income</h2>
                            <p className="text-3xl pb-5 font-bold">+2,456$</p>
                            <p className="text-xs">+2,456 revenue from last month</p>
                        </div>
                        <div className="flex flex-col p-4 bg-gradient-to-r from-gray-800 to-gray-600 h-[9.5rem] w-[100%] rounded-lg justify-center">
                            <h2 className="text-md font-semi-bold pb-5">Expense</h2>
                            <p className="text-3xl pb-5 font-bold">-1,124$</p>
                            <p className="text-xs">This week's income</p>
                        </div>
                    </div>
                    <div className="h-1/2 p-4 text-white flex flex-col bg-gradient-to-r from-gray-800 to-gray-600 justify-center rounded-lg">
                        <PieChart/>
                    </div>
                </div>
                <div className="w-1/3 p-4">
                    <div className="flex flex-col bg-gradient-to-r from-gray-800 to-gray-600 w-full p-4 h-[90vh] text-white rounded-lg">
                        <div className="flex w-full justify-between items-center mb-5">
                            <div className="p-1">
                                <p className="font-semi-bold text-2xl">Recent transactions:</p>
                            </div>
                            <div className="">
                                <a href="#" className="text-semi-bold hover:text-black">See all &#62;</a>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center mb-5">
                            <div className="p-1">
                                <FaBeer size={30}/>
                            </div>
                            <div className="p-1">
                                <p className="">Bar</p>
                            </div>
                            <div className="bg-green-500 p-1 rounded-full">
                                <p className="">Successful!</p>
                            </div>
                            <div className="p-1">
                                <p className="">04.07.2023 12:40 AM</p>
                            </div>
                            <div className="p-1">
                                <p className="">-4.99$</p>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <div className="p-1">
                                <FaGun size={30}/>
                            </div>
                            <div className="p-1">
                                <p className="">Gun shop</p>
                            </div>
                            <div className="bg-green-500 p-1 rounded-full">
                                <p className="">Successful!</p>
                            </div>
                            <div className="p-1">
                                <p className="">04.07.2023 12:40 AM</p>
                            </div>
                            <div className="p-1">
                                <p className="">-249.99$</p>
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashBoard;