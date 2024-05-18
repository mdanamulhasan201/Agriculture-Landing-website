
import { MdAgriculture } from "react-icons/md";
import tree from '../../assets/tree-icon.png';
import dairy from '../../assets/Dairy.png';
const Our_service = () => {
    return (
        <div className="bg-[#F8F7F0]">
            <div className="max-w-screen-xl mx-auto py-10">
                <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-center text-xl'>Our Services</p>
                <h1 className="text-center text-4xl font-semibold font-monrope">
                    What We Offer
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center my-10">
                    {/* card  */}
                    <div className="relative bg-[#FFFFFF] w-72 overflow-hidden">
                        <img className="w-72 transform transition-transform duration-500 hover:scale-110" src="https://i.ibb.co/prSBHnc/service-05-webp.png" alt="Agriculture" />
                        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5CE38] w-16 h-16 rounded-md flex items-center justify-center">
                            <MdAgriculture className="text-5xl text-white" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-semibold my-2 font-monrope">Agriculture Products</h1>
                            <p className="text-[#878680]">Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.</p>
                        </div>
                    </div>
                    <div className="relative bg-[#FFFFFF] w-72 overflow-hidden">
                        <img className="w-72 transform transition-transform duration-500 hover:scale-110" src="https://i.ibb.co/jgBWqbs/service-06-webp.png" alt="Agriculture" />
                        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5CE38] w-16 h-16 rounded-md flex items-center justify-center">
                            <img src={tree} alt="" className="w-10" />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-semibold my-2 font-monrope">Organic Products</h1>
                            <p className="text-[#878680]">Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.</p>
                        </div>
                    </div>
                    <div className="relative bg-[#FFFFFF] w-72 overflow-hidden">
                        <img className="w-72 transform transition-transform duration-500 hover:scale-110" src="https://i.ibb.co/XymPJZY/service-07-webp.png" alt="Agriculture" />
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