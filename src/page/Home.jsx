import bg from '../assets/bg.png';
import logo from '../assets/elements.png';
import { motion } from 'framer-motion';
import cardImge1 from '../assets/cardimg1.png';
import cardImge2 from '../assets/cardimg2.png';
import cardImge3 from '../assets/cardimg3.png';
import sectionImg from '../assets/section-2-1.png';
import sectionImg2 from '../assets/section-2-.png';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Our_service from './home/Our_service';
import Farming from './home/Farming';
import Latest_products from './home/Latest_products';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@mui/material';

const Home = () => {

    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover bg-center text-white flex items-center h-[750px] mt-[51px]">
                <div className='w-full max-w-screen-xl mx-auto px-4 lg:px-8'>
                    <p className='text-left text-sm md:text-base lg:text-lg font-light uppercase'>Welcome to Agrios Farming</p>
                    <h1 className='text-left text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mt-2' style={{ fontFamily: "'Covered By Your Grace', cursive" }}>Agriculture <span className='text-[#EEC044]'>&</span><br />Eco Farming</h1>
                    <p className='mt-5 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className='mt-10 flex items-center gap-6'>
                        <Button
                            variant="contained"
                            endIcon={<FaArrowRight />}
                            color="success"
                            loading
                            sx={{
                                padding: '12px 15px', borderRadius: '5px', backgroundColor: '#4BAF47', color: 'white', '&:hover': { backgroundColor: '#6cd469' }
                            }}
                        >
                            Discover More
                        </Button>
                        <motion.img
                            src={logo}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        />
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                {/* section card */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5 mt-[-40px] z-10'>
                    <div className='bg-white shadow-lg flex flex-col items-center gap-3 py-2 px-36 rounded-lg shadow-gray-400 hover:bg-green-100 transform duration-300 group'>
                        <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl'>Feature 01</p>
                        <h1 className='text-lg font-semibold text-center whitespace-nowrap'>We're using a <br /> new technology</h1>
                        <img className="w-16 transform transition-transform duration-300 group-hover:scale-110" src={cardImge1} alt="" />
                    </div>
                    <div className='bg-white shadow-lg flex flex-col items-center gap-3 py-2 px-36 rounded-lg shadow-gray-400 hover:bg-green-100 transform duration-300 group'>
                        <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl'>Feature 02</p>
                        <h1 className='text-lg font-semibold text-center whitespace-nowrap'>Good in smart <br />organic services</h1>
                        <img className="w-16 transform transition-transform duration-300 group-hover:scale-110" src={cardImge2} alt="" />
                    </div>
                    <div className="bg-white shadow-lg flex flex-col items-center gap-3 py-2 px-36 rounded-lg shadow-gray-400 hover:bg-green-100 transform duration-300 group">
                        <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className="text-[#EEC044] text-xl">Feature 02</p>
                        <h1 className="text-lg font-semibold text-center whitespace-nowrap">Reforming <br /> in the systems</h1>
                        <img className="w-16 transform transition-transform duration-300 group-hover:scale-110" src={cardImge3} alt="Feature" />
                    </div>
                </div>

                {/*  section two */}
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-28 mx-2 md:mx-0'>
                    <div className="relative">
                        <img className="w-[350px] transform transition-transform duration-300 hover:scale-105" src={sectionImg} alt="Main" />
                        <div className="absolute left-0 top-0 mt-[200px] ml-[-10px] md:mt-[260px] md:ml-[-40px] z-10">
                            <img className="w-[150px] md:w-[200px] transform transition-transform duration-300 hover:scale-105" src={sectionImg2} alt="Overlay" />
                        </div>
                    </div>

                    <div className='pt-36 md:pt-0 lg:pt-0 xl:pt-0'>
                        <h5 style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044]'>Our Introductions</h5>
                        <h1 className='text-5xl font-semibold mt-2'>Agriculture & Organic
                            Product Farm</h1>
                        <h3 className='font-semibold text-lg text-[#4BAF47] my-5'>Agrios is the largest global organic farm.</h3>
                        <p className='text-[#878680]'>There are many variations of passages of lorem ipsum available but the
                            majority have suffered alteration in some form by injected humor or
                            random word which don’t look even.</p>
                        <div className='flex my-5 items-center gap-2 w-[100%] justify-between '>
                            <div className='flex items-center gap-3'>
                                <img className='w-20' src="https://i.ibb.co/4tCJK40/Icon.png" alt="" />
                                <p className='text-lg font-semibold'>Growing fruits <br />
                                    vegetables</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img className='w-20' src="https://i.ibb.co/VHM1T9L/dsaf.png" alt="" />
                                <p className='text-lg font-semibold'>Tips for ripening <br />
                                    your fruits</p>
                            </div>
                        </div>

                        <div className='my-8'>
                            <p className='flex items-center gap-1'>
                                <IoIosCheckmarkCircle className='text-[#C5CE38]' />
                                <span>Lorem Ipsum is not simply random text.</span>
                            </p>
                            <p className='flex items-center gap-1'>
                                <IoIosCheckmarkCircle className='text-[#C5CE38]' />
                                <span>Lorem Ipsum is not simply random text.</span>
                            </p>

                        </div>
                        <button className='px-8 py-3 text-white bg-[#4BAF47] mb-8 rounded hover:bg-[#6cd469] transform duration-300'>Discover more</button>
                    </div>


                </div>
            </div>
            <Our_service></Our_service>
            <Farming></Farming>
            <Latest_products />
        </div>
    );
};

export default Home;
