import { useState, useEffect } from 'react';
import { MdAgriculture } from "react-icons/md";
import tree from '../../assets/tree-icon.png';
import dairy from '../../assets/Dairy.png';

const agricultureImages = [
    "https://i.ibb.co/prSBHnc/service-05-webp.png",
    "https://i.ibb.co/MSjsRMS/4-2-jpg.png",
];

const organicImages = [
    "https://i.ibb.co/jgBWqbs/service-06-webp.png",
    "https://i.ibb.co/q7fQ18y/4-3-jpg.png",

];

const dairyImages = [
    "https://i.ibb.co/XymPJZY/service-07-webp.png",
    "https://i.ibb.co/xh11YZn/4-4-jpg.png",

];

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0); // Start fade-out

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1);
            }, 200);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <img
            className="w-72 h-48 transform transition-transform duration-500 hover:scale-110"
            src={images[currentIndex]}
            alt="Service"
            style={{
                opacity: opacity,
                transition: 'opacity 0.5s ease-in-out' 
            }}
        />
    );
};

const Our_service = () => {
    return (
        <div className="bg-[#F8F7F0]">
            <div className="max-w-screen-xl mx-auto py-10 px-5">
                <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-center text-xl'>Our Services</p>
                <h1 className="text-center text-4xl font-semibold font-monrope">
                    What We Offer
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center  my-10">
                    {/* Card 1 */}
                    <div className="relative bg-[#FFFFFF] w-72 overflow-hidden">
                        <ImageSlider images={agricultureImages} />
                        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5CE38] w-16 h-16 rounded-md flex items-center justify-center">
                            <MdAgriculture className="text-5xl text-white" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-semibold my-2 font-monrope">Agriculture Products</h1>
                            <p className="text-[#878680]">Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-[#FFFFFF] w-72 overflow-hidden">
                        <ImageSlider images={organicImages} />
                        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5CE38] w-16 h-16 rounded-md flex items-center justify-center">
                            <img src={tree} alt="" className="w-10" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-semibold my-2 font-monrope">Organic Products</h1>
                            <p className="text-[#878680]">Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-[#FFFFFF] w-72 overflow-hidden">
                        <ImageSlider images={dairyImages} />
                        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5CE38] w-16 h-16 rounded-md flex items-center justify-center">
                            <img src={dairy} alt="" className="w-10" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-semibold my-2 font-monrope">Dairy Products</h1>
                            <p className="text-[#878680]">Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our_service;
