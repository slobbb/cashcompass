import React from "react";
import '../App.css';
import { FaBoxArchive } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const features = [
   {
    title: 'All in one place',
    description: 'Get the ability to track your income and expenses in one place',
    icon: <FaBoxArchive size={50}/>,
   },
   {
    title: 'Reporting',
    description: 'The reports will be',
    icon: <FaFile size={50}/>,
   },
   {
    title: 'Plan your budget',
    description: 'The reports will be',
    icon: <FaCalendarDays size={50}/>,
   },
   {
    title: 'The opportunity to join a family',
    description: 'The reports will be',
    icon: <FaPeopleGroup size={50}/>,
   },
];
function Presentation () {
    return(
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Opportunities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                    <div key={index} className="pt-10 grid place-items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        {feature.icon}
                        <h3 className="text-xl font-semibold mt-6 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 mb-5">{feature.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Presentation;