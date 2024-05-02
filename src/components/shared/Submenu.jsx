import logo from '../../assets/logo.png';
import { FaFacebook, FaInstagramSquare, FaPinterest, FaTwitter } from 'react-icons/fa';
import call from '../../assets/call.png';
import icon from '../../assets/Icon.png';
import location from '../../assets/Vector.png';

const Submenu = () => {
    return (
        <div className="hidden lg:block">
            <div className='max-w-screen-xl mx-auto py-5 px-5 md:px-5 lg:px-5 xl:px-0'>
                <div className='flex justify-between items-center gap-5'>
                    <img className='md:w-36' src={logo} alt="" />
                    <div className='flex justify-between items-center gap-9'>
                        <div className='flex items-center gap-2'>
                            <div className="bg-[#F8F7F0] p-2 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaFacebook />
                            </div>
                            <div className="bg-[#F8F7F0] p-2 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaInstagramSquare />
                            </div>
                            <div className="bg-[#F8F7F0] p-2 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaTwitter />
                            </div>
                            <div className="bg-[#F8F7F0] p-2 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaPinterest />
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src={call} alt="" />
                            <div>
                                <p className='text-[#878680]'>Call anytime</p>
                                <p className='font-semibold'>+8801777577371</p>
                            </div>
                        </div>
                        <div className='h-14 w-[2px] bg-gray-200'></div>
                        <div className='flex items-center gap-5'>
                            <img src={icon} alt="" />
                            <div>
                                <p className='text-[#878680]'>Send email</p>
                                <p className='font-semibold'>support@agrios.com</p>
                            </div>
                        </div>
                        <div className='h-14 w-[2px] bg-gray-200'></div>
                        <div className='flex items-center gap-5'>
                            <img src={location} alt="" />
                            <div>
                                <p className='text-[#878680]'>Mirpur-1</p>
                                <p className='font-semibold'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submenu;
