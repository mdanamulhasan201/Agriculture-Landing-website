import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MeetFarmers = () => {
    const farmers = [
        {
            id: 1,
            name: "Farmer John",
            description: "Expert in organic farming with over 10 years of experience.",
            image: "https://i.ibb.co/2kcz5DY/farmer.png",
            link: ""
        },
        {
            id: 2,
            name: "Farmer Jane",
            description: "Specializes in sustainable agriculture and eco-friendly practices.",
            image: "https://i.ibb.co/XkFMVK8/famer2.png",
            link: ""
        },
        {
            id: 3,
            name: "Farmer Bob",
            description: "Passionate about livestock farming and animal welfare.",
            image: "https://i.ibb.co/hZR3Krg/farmer3.png",
            link: ""
        },
        {
            id: 4,
            name: "Farmer Alice",
            description: "Focuses on crop rotation and soil health management.",
            image: "https://i.ibb.co/XkFMVK8/famer2.png",
            link: ""
        }
    ];

    const handleShare = (link) => {
        navigator.clipboard.writeText(link);
        toast.success('Link copied to clipboard: ' + link);
    };

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-5">
                <div className="py-10">
                    <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-center text-2xl'>Team Members</p>
                    <h1 className="text-center text-4xl font-semibold mb-10">
                        Meet Our <span className='text-[#4BAF47]'>Farmers</span>
                    </h1>
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {farmers.map(farmer => (
                            <div
                                key={farmer.id}
                                className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
                            >
                                <img
                                    src={farmer.image}
                                    alt={farmer.name}
                                    className="w-24 h-24 rounded-full mb-4 transition-transform transform hover:scale-110"
                                />
                                <h3 className="text-xl font-semibold text-[#4BAF47] mb-2">{farmer.name}</h3>
                                <p className="text-gray-600 text-center mb-4">{farmer.description}</p>
                                <button
                                    onClick={() => handleShare(farmer.link)}
                                    className="absolute top-2 right-2 bg-[#4BAF47] text-white p-2 rounded-full hover:bg-[#399637] transition duration-300"
                                    title="Share Profile"
                                >
                                    <FaShareAlt />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetFarmers;
