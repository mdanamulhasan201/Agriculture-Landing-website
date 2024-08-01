import { useEffect, useState } from 'react';
import { FaComments } from "react-icons/fa6";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoIosContact } from "react-icons/io";
const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('news.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className='max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-5'>
            <div className='text-center'>
                <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl '>Latest News</p>
                <h1 className="text-3xl font-semibold font-monrope">News & Articles</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 my-5'>
                {news.slice(0, 3).map((item, index) => (
                    <div key={index} className='bg-white transform duration-300 group hover:bg-[#F1F5F9] border w-64 shadow-md'>
                        <div className='flex justify-center items-center relative'>
                            <img className='w-full ' src={item.image} alt="" />
                            <div className='absolute -bottom-7 bg-[#49A760] rounded-md w-32 mx-auto py-1 -translate-y-1/2'>
                                <p className='text-center text-white text-[12px]'>{item.date}</p>
                            </div>
                        </div>
                        <div className='p-7'>
                            <div className='flex my-3 justify-between items-center text-[14px] text-[#878680]'>
                                <p className='flex gap-1 items-center'><IoIosContact className='text-[#EEC044] text-xl' /> {item.postBy}</p>
                                <p className='flex gap-1 items-center'><FaComments className='text-[#EEC044] text-xl' /> {item.comment} Comment</p>
                            </div>
                            <h1 className=' text-[16px] font-semibold'>{item.title}</h1>

                            <button className='mt-2 flex items-center gap-1  group-hover:scale-105 transform duration-300 group-hover:text-[#49A760] '>Continue Reading

                                <HiArrowNarrowRight className='text-lg' />
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
