import { useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaSpinner } from "react-icons/fa";
import { IoMdPaperPlane, IoMdTime } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubFooter from "./SubFooter";

// *********Define the validation schema using yup*********
const schema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
});

const Footer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    // *******handle form submission*********
    const onSubmit = (data) => {
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            toast.success("Subscribed successfully!");
            reset();
        }, 2000);
    };

    return (
        <>
            <div className="bg-[#24231D] w-full">
                <div className="max-w-screen-xl mx-auto px-5 py-14">
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                            {/* **********left side*************/}
                            <div className="flex flex-col items-center md:items-start">
                                <img className="w-48" src="https://i.ibb.co/pQ64Z7N/Link-logo-logo-2x-white-1-webp.png" alt="" />
                                <p className="text-gray-400 mt-5 text-center md:text-start">
                                    There are many variations of passages
                                    of lorem ipsum available, but the
                                    majority suffered.
                                </p>
                                <div className='flex items-center gap-7 text-white mt-5'>
                                    <div className="flex justify-center items-center bg-[#1F1E17] rounded-full w-10 h-10 ">
                                        <FaFacebookF className="text-white text-xl transform transition duration-300 hover:scale-110" />
                                    </div>
                                    <div className="flex justify-center items-center bg-[#1F1E17] rounded-full w-10 h-10 ">
                                        <FaInstagram className="text-white text-xl transform transition duration-300 hover:scale-110" />
                                    </div>
                                    <div className="flex justify-center items-center bg-[#1F1E17] rounded-full w-10 h-10 ">
                                        <FaTwitter className="text-white text-xl transform transition duration-300 hover:scale-110" />
                                    </div>
                                    <div className="flex justify-center items-center bg-[#1F1E17] rounded-full w-10 h-10 ">
                                        <FaPinterest className="text-white text-xl transform transition duration-300 hover:scale-110" />
                                    </div>
                                </div>
                            </div>
                            {/* ***********left side2**********/}
                            <div>
                                <h1 className="text-white text-xl font-semibold font-monrope mt-2">Explore</h1>
                                <img className="w-60" src="https://i.ibb.co/gRQ5QMt/div-elementor-element.png" alt="" />
                                <div className="">
                                    <ul className="flex gap-10">
                                        <div className="flex flex-col gap-5">
                                            <Link to='/about' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300 font-monrope text-gray-400 ">About</span>
                                                </li>
                                            </Link>
                                            <Link to='/services' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300  font-monrope text-gray-400 ">Services</span>
                                                </li>
                                            </Link>
                                            <Link to='/products' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300  font-monrope text-gray-400 ">Products</span>
                                                </li>
                                            </Link>
                                            <Link to='/shop' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300  font-monrope text-gray-400 ">Shop</span>
                                                </li>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <Link to='/careers' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300  font-monrope text-gray-400 ">Careers</span>
                                                </li>
                                            </Link>
                                            <Link to='/news' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300  font-monrope text-gray-400 ">News</span>
                                                </li>
                                            </Link>
                                            <Link to='/contact' className="">
                                                <li className="flex items-center gap-2 ">
                                                    <img className="w-4" src="https://i.ibb.co/SQYSXfF/Iconfg.png" alt="" />
                                                    <span className="text-md hover:text-[#EEC044] transform duration-300  font-monrope text-gray-400 ">Contact</span>
                                                </li>
                                            </Link>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                            {/* ***********middle**************/}
                            <div>
                                <h1 className="text-white text-xl font-semibold font-monrope mt-2">Contact</h1>
                                <img className="w-60" src="https://i.ibb.co/gRQ5QMt/div-elementor-element.png" alt="" />
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <p className="flex items-center gap-2 text-md font-monrope text-gray-400">
                                            <IoMdTime className="text-xl text-[#EEC044]" /> <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-md font-monrope text-gray-400">
                                            <IoLocationOutline className="text-xl text-[#EEC044]" /> <span>Mirpur-1 Dhaka, Bangladesh</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-md font-monrope text-gray-400">
                                            <IoCallOutline className="text-xl text-[#EEC044]" />
                                            <a href="tel:+8801777577371" className="text-gray-400 hover:text-[#EEC044]">
                                                +8801777577371
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-md font-monrope text-gray-400">
                                            <MdMailOutline className="text-xl text-[#EEC044]" />
                                            <a href="mailto:support@agrios.com" className="text-gray-400 hover:text-[#EEC044]">
                                                support@agrios.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* **********right side***********/}
                            <div>
                                <h1 className="text-white text-xl font-semibold font-monrope mt-2 self-start">Newsletter</h1>
                                <img className="w-60" src="https://i.ibb.co/gRQ5QMt/div-elementor-element.png" alt="" />
                                <form className="" onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register("email")}
                                        className={`w-full p-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#EEC044] focus:border-transparent`}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    <button
                                        type="submit"
                                        className="mt-5 flex items-center justify-center gap-2 w-full p-3 bg-[#EEC044] font-monrope text-white rounded-md hover:bg-[#4BAF47] transform duration-300"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <FaSpinner className="animate-spin" />
                                        ) : (
                                            <>
                                                <span>Subscribe</span>
                                                <IoMdPaperPlane className="text-md" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* *********Sub footer***********/}
            <SubFooter />
        </>
    );
};

export default Footer;
