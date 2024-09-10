import { IoIosCheckmarkCircle } from "react-icons/io";
import bg from "../../assets/choseusbg.png";
import background from "../../assets/bg_choose.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
const WhyChooseUs = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-5'>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className="lg:order-2 order-1">
                        <LazyLoadImage effect="blur" className="w-[900px] h-[500px] lg:h-[400px]" src={bg} alt="" />
                    </div>
                    <div className="lg:order-1 order-2">
                        <div>
                            <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl '>Our Farm Benefits</p>
                            <h1 className=" text-3xl font-semibold font-monrope">Why Choose Agrios
                                Market</h1>
                            <p className="text-[#878680] text-[14px] my-2">There are many variations of passages of available but the
                                majortity have sufferred alteration in some form by injected
                                humor or random word which don't look even.</p>
                        </div>
                        <div className="mt-5">
                            <div className="flex  gap-3">
                                <div>
                                    <IoIosCheckmarkCircle className="mt-1 text-2xl text-[#4BAF47]" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">Quality Organic Food</h1>
                                    <p className="text-[#878680] mt-1 text-[14px]">There are variation You need to be sure there is
                                        anything hidden in the middle of text.</p>
                                </div>
                            </div>
                            <div className="flex my-5 gap-3">
                                <div>
                                    <IoIosCheckmarkCircle className="mt-1 text-2xl text-[#C5CE38]" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">Professional Farmers</h1>
                                    <p className="text-[#878680] mt-1 text-[14px]">There are variation You need to be sure there is
                                        anything hidden in the middle of text.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div>
                                    <IoIosCheckmarkCircle className="mt-1 text-2xl text-[#EEC044]" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">Quality Products</h1>
                                    <p className="text-[#878680] mt-1 text-[14px]">There are variation You need to be sure there is
                                        anything hidden in the middle of text.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className='px-7 hover:scale-105  py-3 flex items-center gap-1 text-white bg-[#4BAF47] mb-8 rounded hover:bg-[#6cd469] transform duration-300'>Discover more

                                <HiArrowNarrowRight className='text-lg' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;