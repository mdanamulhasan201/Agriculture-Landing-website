import logo from '../../assets/logo.png';
import { FaFacebook, FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import call from '../../assets/call.png';
import icon from '../../assets/Icon.png';
import location from '../../assets/Vector.png';
import { Link } from 'react-router-dom';

const Submenu = () => {
    return (
        <div className="hidden lg:block">
            <div className='max-w-screen-xl mx-auto py-1 px-5'>
                <div className='flex justify-between items-center gap-5'>
                    <Link to='/'> <img className='w-28' src={logo} alt="" /></Link>
                    <div className='flex justify-between items-center gap-9'>
                        <div className='flex items-center gap-2'>
                            <div className=" hover:bg-green-100 p-1 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaFacebookF className='w-3' />
                            </div>
                            <div className=" hover:bg-green-100 p-1 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaInstagram className='w-4' />
                            </div>
                            <div className=" hover:bg-green-100 p-1 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaTwitter className='w-5' />
                            </div>
                            <div className=" hover:bg-green-100 p-1 rounded-full text-2xl transform transition duration-300 hover:scale-110">
                                <FaPinterest className='w-5' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='w-4' src={call} alt="" />
                            <div>
                                {/* <p className='text-[#878680]'>Call anytime</p> */}
                                <p className='text-[#878680] text-sm'>+8801777577371</p>
                            </div>
                        </div>
                        <div className='h-14 w-[2px] bg-gray-200'></div>
                        <div className='flex items-center gap-2'>
                            <img className='w-4' src={icon} alt="" />
                            <div>
                                {/* <p className='text-[#878680]'>Send email</p> */}
                                <p className='text-[#878680] text-sm'>support@agrios.com</p>
                            </div>
                        </div>
                        <div className='h-14 w-[2px] bg-gray-200'></div>
                        <div className='flex items-center gap-2'>
                            <img className='w-4' src={location} alt="" />
                            <div>
                                <p className='text-[#878680] text-sm'>Mirpur-1 Dhaka, Bangladesh</p>
                                {/* <p className='font-semibold'></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submenu;
