import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosCheckmarkCircle, IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import MeetFramers from "./MeetFramers";


const About = () => {
    const divStyle = {
        backgroundImage: `url('https://i.ibb.co/rybD1fm/title.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div>
            {/* banner */}
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>About</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome />
                                Home </span>
                        </Link> / About
                    </p>
                </div>
            </div>
            {/*  */}
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    {/* left side */}

                    <div className="md:w-6/12">
                        <div className="relative">
                            <img
                                className="h-96 w-96 rounded-md"
                                src="https://i.ibb.co/3hJRMrh/about2.png"
                                alt="Large background image"
                            />
                            <img
                                className="h-48 w-48 rounded-md absolute top-1/2 left-0 transform  -translate-x-1/4"
                                src="https://i.ibb.co/dKB5fv6/img.png"
                                alt="Overlapping image"
                            />
                        </div>
                    </div>

                    {/* right side */}
                    <div className="md:w-6/12 ">
                        <div>
                            <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl '>Get to Know Us</p>
                            <h1 className=" text-4xl font-semibold font-monrope">The Best Agriculture
                                Market</h1>
                            <p className="text-[#4BAF47] my-5 font-semibold text-md">There are many variations of passa of lorem available, but
                                the majority have suffered alteration.</p>
                            <p className="text-[#878680] text-[14px] my-2">There are many variations of passages of lorem ipsum available but the
                                majority have suffered alteration in some form by injected humor or
                                random word which don’t look even.</p>


                            <div className='my-8'>
                                <p className='flex items-center gap-2'>
                                    <IoIosCheckmarkCircle className='text-[#C5CE38]' />
                                    <span>Suspe ndisse suscipit sagittis leo.</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <IoIosCheckmarkCircle className='text-[#C5CE38]' />
                                    <span>Entum estibulum disgnissim posuere.</span>
                                </p>
                                <p className='flex items-center gap-2'>
                                    <IoIosCheckmarkCircle className='text-[#C5CE38]' />
                                    <span>Lorem Ipsum on the tend to repeat.</span>
                                </p>
                                <button className='px-7 mt-5 hover:scale-105  py-3 flex items-center gap-1 text-white bg-[#4BAF47] mb-8 rounded hover:bg-[#6cd469] transform duration-300'>Discover more

                                    <HiArrowNarrowRight className='text-lg' />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* Testimonials */}
            <Testimonials />
            {/* Farmers */}
            <MeetFramers />

        </div>
    );
};

export default About;