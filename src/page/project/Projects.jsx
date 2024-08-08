import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
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

    // fetch projects data from database

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('projects.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProjects();

    }, []);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);


    return (
        <div>
            {/* banner */}
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Projects</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome /> Home</span>
                        </Link> / Projects
                    </p>
                </div>
            </div>
            {/* Projects */}
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-10 xl:px-24 2xl:px-0 my-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        currentProjects.map((project) => (
                            <Link key={project.id} to={`/project/${project.id}`} className="group block relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <img src={project.image} alt={project.title} className="h-96 w-full object-cover" />
                                <div className="absolute bottom-10 left-4 z-10">
                                    <p className="text-white text-lg font-semibold">{project.title}</p>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <p className="text-white">Durations: {project.duration}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-5">
                    <Pagination
                        count={Math.ceil(projects.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handleChangePage}
                        color="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
