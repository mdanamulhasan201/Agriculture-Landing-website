import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";


const NewsDetails = () => {

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
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Our Blog</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome />
                                Home </span>
                        </Link>
                    </p>

                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-5">
                <div className="flex ">
                    {/* left side */}
                    <div>

                    </div>
                    {/* right side */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;