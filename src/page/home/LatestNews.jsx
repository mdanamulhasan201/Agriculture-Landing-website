import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('projects.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
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
        <div className='max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-10 '>
            <div className='text-center'>
                <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl '>Latest Projects</p>
                <h1 className="text-3xl font-semibold font-monrope">Projects</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mt-10">
                {
                    news.slice(2, 6).map((project) => (
                        <Link key={project.id} to={`/project/${project.id}`} className="group block relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.title} className="h-96 w-full object-cover" />
                            <div className="absolute bottom-10 left-4 z-10">
                                <p className="text-white text-lg font-semibold">{project.title}</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                <p className="text-white">Duration: {project.duration}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestNews;
