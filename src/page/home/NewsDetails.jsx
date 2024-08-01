import { useEffect, useState } from "react";
import { FaComments, FaFacebookF, FaLinkedin, FaSpinner, FaTwitter } from "react-icons/fa6";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosContact, IoMdHome, IoMdPaperPlane } from "react-icons/io";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox, TextField, Button, Typography, Box } from '@mui/material';
import { toast } from "react-toastify";

const NewsDetails = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const itemsPerPage = 3;
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
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

        const fetchCategories = async () => {
            try {
                const response = await fetch('newsCategory.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data.category);
            } catch (error) {
                console.error(error);
            }
        };

        fetchNews();
        fetchCategories();
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

    const limitWords = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    // Filter news based on the selected category and search term
    const filteredNews = news.filter((item) => {
        const matchesCategory = selectedCategory ? item.categoryId === selectedCategory : true;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Calculate the starting and ending index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedNews = filteredNews.slice(startIndex, endIndex);

    // Total number of pages
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    // Handle post click
    const handlePostClick = (post) => {
        setSelectedPost(post);
        setSelectedCategory(null);
    };

    // Handle category click
    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setSelectedPost(null);
        setCurrentPage(1);
    };

    // email validation
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // handle post comment 
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!fullName.trim()) {
            errors.fullName = "Full Name is required";
        }
        if (!email.trim()) {
            errors.email = "Email Address is required";
        } else if (!validateEmail(email)) {
            errors.email = "Invalid Email Address";
        }
        if (!comment.trim()) {
            errors.comment = "Comment is required";
        }

        if (Object.keys(errors).length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                toast.success('Comment submitted successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                });
                setFullName('');
                setEmail('');
                setComment('');
                setErrors({});
                setIsLoading(false);
            }, 2000); 
        } else {
            setErrors(errors);
        }
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
                        </Link> / News
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-10 xl:px-24 2xl:px-0 my-5">
                <div className="flex justify-between ">
                    {/* left side */}
                    <div className="w-6/12 flex flex-col gap-5">
                        {selectedPost ? (
                            <div className='bg-white transform duration-300 shadow-md rounded-lg overflow-hidden'>
                                <div className='flex justify-center items-center relative'>
                                    <img className='w-full h-64 object-cover' src={selectedPost.image} alt={selectedPost.title} />
                                    <div className='absolute left-2 bottom-3 bg-[#49A760] rounded-md w-32 mx-auto py-1'>
                                        <p className='text-center text-white text-[12px]'>{selectedPost.date}</p>
                                    </div>
                                </div>
                                <div className='px-7 py-3'>
                                    <div className='flex my-3 gap-5 items-center text-[14px] text-[#878680]'>
                                        <p className='flex gap-1 items-center'><IoIosContact className='text-[#EEC044] text-xl' /> {selectedPost.postBy}</p>
                                        <p className='flex gap-1 items-center'><FaComments className='text-[#EEC044] text-xl' /> {selectedPost.comment} Comment</p>
                                    </div>
                                    <h1 className='text-[18px] font-semibold'>{selectedPost.title}</h1>
                                    <p className="text-[#878680] text-[14px]">{selectedPost.content}</p>
                                    <div className="w-full bg-gray-300 h-[1px] my-5"></div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-5">
                                            <h1 className="font-semibold">Tags</h1>
                                            <p className="bg-gray-100 px-2 py-1 rounded-md">{selectedPost.tag}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Link className="bg-[#F8F7F0] p-3 rounded-full" >
                                                <FaTwitter className="hover:scale-105 transform duration-500" />
                                            </Link>
                                            <Link className="bg-[#F8F7F0] p-3 rounded-full" >
                                                <FaFacebookF className="hover:scale-105 transform duration-500" />
                                            </Link>
                                            <Link className="bg-[#F8F7F0] p-3 rounded-full" >
                                                <FaLinkedin className="hover:scale-105 transform duration-500" />
                                            </Link>
                                        </div>
                                    </div>
                                    <Box component="form" mt={8} onSubmit={handleSubmit}>
                                        <Typography className="font-semibold" variant="h6" gutterBottom>
                                            Leave a Comment
                                        </Typography>
                                        <Box display="flex" alignItems="center" my={2}>
                                            <Checkbox />
                                            <Typography variant="body2">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </Typography>
                                        </Box>
                                        <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                variant="outlined"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                error={!!errors.fullName}
                                                helperText={errors.fullName}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                variant="outlined"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                error={!!errors.email}
                                                helperText={errors.email}
                                            />
                                        </Box>
                                        <TextField
                                            fullWidth
                                            label="Comment"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            margin="normal"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            error={!!errors.comment}
                                            helperText={errors.comment}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            disabled={isLoading}
                                            sx={{
                                                backgroundColor: '#4CAF50',
                                                '&:hover': {
                                                    backgroundColor: '#45A049',
                                                },

                                            }}
                                            className="mt-5 flex items-center justify-center gap-2 w-full p-3 hover:bg-[#EEC044] text-white rounded-md bg-[#4BAF47] transform duration-300"
                                        >
                                            {isLoading ? (
                                                <FaSpinner className="animate-spin" />
                                            ) : (
                                                <>
                                                    <span>Post Comment</span>
                                                    <IoMdPaperPlane className="text-md" />
                                                </>
                                            )}
                                        </Button>
                                    </Box>

                                </div>
                            </div>
                        ) : paginatedNews.length > 0 ? (
                            paginatedNews.map((item, index) => (
                                <div key={index} className='bg-white transform duration-300 group hover:bg-[#F1F5F9] border-b shadow-md rounded-lg overflow-hidden'>
                                    <div className='flex justify-center items-center relative'>
                                        <img className='w-full h-64 object-cover' src={item.image} alt={item.title} />
                                        <div className='absolute left-2 bottom-3 bg-[#49A760] rounded-md w-32 mx-auto py-1'>
                                            <p className='text-center text-white text-[12px]'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='px-7 py-3'>
                                        <div className='flex my-3 gap-5 items-center text-[14px] text-[#878680]'>
                                            <p className='flex gap-1 items-center'><IoIosContact className='text-[#EEC044] text-xl' /> {item.postBy}</p>
                                            <p className='flex gap-1 items-center'><FaComments className='text-[#EEC044] text-xl' /> {item.comment} Comment</p>
                                        </div>
                                        <h1 className='text-[18px] font-semibold'>{item.title}</h1>
                                        <p className="text-[#878680] text-[14px]">{limitWords(item.content, 50)}</p>

                                        <button
                                            onClick={() => handlePostClick(item)}
                                            className='my-3 flex items-center gap-1 group-hover:scale-105 transform duration-300 group-hover:text-[#49A760] '>Read More
                                            <HiArrowNarrowRight className='text-lg' />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-center text-[#878680]'>No news available</p>
                        )}
                        {filteredNews.length > itemsPerPage && (
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                color="primary"
                                className='flex justify-center my-5'
                            />
                        )}
                    </div>

                    {/* right side */}
                    <div className="w-5/12 ">
                        <div className="sticky top-20">
                            <TextField
                                label="Search News"
                                variant="outlined"
                                fullWidth
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <div className="flex flex-col gap-5">
                                {/* Latest Posts */}
                                <div className="bg-[#F8F7F0] shadow-md rounded-lg p-5 mt-5">
                                    <h1 className="text-xl font-semibold">Latest Posts</h1>
                                    <div className="h-[3px] w-14 bg-[#4BAF47] mt-1"></div>
                                    <ul>
                                        {news.slice(0, 3).map((item) => (
                                            <li onClick={() => handlePostClick(item)} key={item.id} className="flex cursor-pointer flex-col lg:flex-row gap-5 hover:bg-white hover:scale-105 transform duration-300 py-5 px-2 ">
                                                <img className="md:w-48 w-36 rounded-md" src={item.image} alt={item.title} />
                                                <div>
                                                    <p className='flex gap-1 items-center text-[#878680] text-[14px] '><IoIosContact className='text-[#EEC044] text-xl' /> {item.postBy}</p>
                                                    <h1 className='lg:text-[14px] text-[12px] font-semibold'>{item.title}</h1>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* category */}
                                <div className='bg-[#F8F7F0] shadow-md rounded-lg p-5 mt-5'>
                                    <h1 className="text-xl font-semibold">Categories</h1>
                                    <div className="h-[3px] w-14 bg-[#4BAF47] mt-1"></div>
                                    <ul>
                                        {categories.map((category) => (
                                            <li
                                                key={category.id}
                                                onClick={() => handleCategoryClick(category.id)}
                                                className={`cursor-pointer p-3 hover:bg-white rounded-md ${selectedCategory === category.id ? 'bg-gray-200' : ''}`}
                                            >
                                                {category.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
