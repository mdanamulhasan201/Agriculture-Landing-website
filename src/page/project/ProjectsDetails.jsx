import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"; // Import arrow icons

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedChallengeIndex, setExpandedChallengeIndex] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await fetch('/projects.json'); // Ensure the correct path to your JSON file
                if (!response.ok) {
                    throw new Error('Failed to fetch project details');
                }
                const data = await response.json();
                const selectedProject = data.find((proj) => proj.id.toString() === id);
                setProject(selectedProject);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProjectDetails();
    }, [id]);

    const handleToggleDescription = (index) => {
        setExpandedChallengeIndex(expandedChallengeIndex === index ? null : index);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

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
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Project Details</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome /> Home</span>
                        </Link> / Project Details
                    </p>
                </div>
            </div>
            {/* Project details */}
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-10 xl:px-24 2xl:px-0 my-5">
                <div className="flex flex-col lg:flex-row gap-10">
                    <img src={project.image} alt={project.title} className="lg:w-96 w-full h-full object-cover rounded-lg" />
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="w-full lg:w-9/12">
                            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <p className="text-gray-700 mb-4 font-semibold">{project.subtitle}</p>
                            <p className="text-gray-700 mb-4">{project.description2}</p>
                            <h1 className="text-3xl font-bold mb-4">Challenges</h1>
                            <div>
                                {project.challenges.map((challenge, index) => (
                                    <div key={index} className="mb-4">
                                        <div
                                            className="flex items-center cursor-pointer"
                                            onClick={() => handleToggleDescription(index)}
                                        >
                                            <p className="text-gray-700 flex-grow font-semibold">{challenge.title}</p>
                                            {expandedChallengeIndex === index ? (
                                                <MdKeyboardArrowUp className="text-gray-700 text-xl" />
                                            ) : (
                                                <MdKeyboardArrowDown className="text-gray-700 text-xl" />
                                            )}
                                        </div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedChallengeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                        >
                                            <p className="text-gray-700 mt-2">{challenge.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* details */}
                        <div className="flex flex-col gap-5 p-5 border shadow-md bg-white rounded-md w-full  lg:h-[400px] lg:w-3/12">
                            <div>
                                <h1 className="">Services:</h1>
                                <p className="font-semibold">{project.service}</p>
                            </div>
                            <div>
                                <h1 className="">Farmer:</h1>
                                <p className="font-semibold">{project.farmer}</p>
                            </div>
                            <div>
                                <h1 className="">Duration:</h1>
                                <p className="font-semibold">{project.duration}</p>
                            </div>
                            <div>
                                <h1 className="">Location:</h1>
                                <p className="font-semibold">{project.location}</p>
                            </div>
                            <div className="flex items-center gap-5 justify-center mt-auto">
                                <Link> <FaFacebook className="text-2xl hover:scale-110" /></Link>
                                <Link><FaTwitter className="text-2xl hover:scale-110" /></Link>
                                <Link> <FaInstagram className="text-2xl hover:scale-110" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
