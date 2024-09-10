import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import { IoMdHome, IoMdPaperPlane } from 'react-icons/io';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Service_details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/whatWeOffer.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                const selectedProduct = data.find(item => item.id === parseInt(id));
                setProduct(selectedProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const validate = () => {
        let tempErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (name.trim().length === 0) {
            tempErrors.name = 'Full Name is required';
            isValid = false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = 'Email is not valid';
            isValid = false;
        }
        if (message.trim().length === 0) {
            tempErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            setTimeout(() => {
                toast.success('Your question has been submitted!');
                setName('');
                setEmail('');
                setMessage('');
                setIsLoading(false);
            }, 2000);
        }
    };

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

    const services = [
        'Agriculture Products',
        'Organic Products',
        'Dairy Products',
        'Fresh Vegetables',
        'Poultry Products'
    ];

    return (
        <div>
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Service Details</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome />
                                Home </span>
                        </Link> / {product.offerName}
                    </p>

                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-6 mt-20">
                <div className='flex justify-center flex-col md:flex-row md:items-start items-center gap-5 w-full'>
                    {/* ************service list**********/}
                    <div className='md:w-[27%] w-full'>
                        <div className='bg-[#F6F6F6]'>
                            <div className='py-14 px-5'>
                                <h1 className='text-xl font-semibold'>Service List</h1>
                                {services.map(service => (
                                    <div key={service} className={`bg-[#FFFFFF] mt-5 ${product.offerName === service ? 'bg-[#eec044] text-white' : 'text-gray-500'}`}>
                                        <Link className='py-3 px-3 flex justify-between items-center'>
                                            {service} <span><ArrowRightAltIcon /></span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* **********Form visible on md and up************/}
                        <form className='py-10 hidden md:block' onSubmit={handleSubmit}>
                            <h1 className='text-xl'>Have any Question?</h1>
                            <Box sx={{ margin: '20px 0' }}>
                                <TextField
                                    helperText={errors.name || ' '}
                                    error={!!errors.name}
                                    id="name"
                                    label="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ width: '100%' }}
                                />
                                <TextField
                                    helperText={errors.email || ' '}
                                    error={!!errors.email}
                                    id="email"
                                    label="Your E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ width: '100%', marginTop: '20px' }}
                                />
                                <TextField
                                    helperText={errors.message || ' '}
                                    error={!!errors.message}
                                    id="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    sx={{ width: '100%', marginTop: '20px' }}
                                />
                            </Box>
                            <button
                                type="submit"
                                className='flex w-full whitespace-nowrap items-center justify-center  py-3 text-white bg-[#4BAF47] mb-8 rounded hover:bg-[#6cd469] transform duration-300 font-semibold'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                                ) : (
                                    <>
                                        <span>Submit Question</span>
                                        <IoMdPaperPlane className="text-lg ms-1" />
                                    </>
                                )}
                            </button>

                        </form>
                    </div>
                    <div className='md:w-[70%] w-full'>
                        <div>
                            <LazyLoadImage effect="blur" src={product.img1} alt={product.offerName} className="w-full h-[500px]" />
                            <h1 className="text-4xl font-semibold font-monrope mt-5 text-gray-700">{product.offerName}</h1>
                            <div className="mt-5">
                                <p className='font-roboto leading-7 text-gray-700'>{product.description}</p>
                            </div>
                            <h1 className='mt-5 text-2xl font-roboto text-gray-700 mb-5'>The importance of {product.offerName}</h1>
                            <p className='font-roboto leading-7 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, eveniet? Assumenda perspiciatis a error nulla, qui earum veniam labore consequuntur quo aut tempora vitae doloribus excepturi ipsa distinctio odio quam et at tenetur cum, porro cumque? Reiciendis animi porro fuga?</p>
                            <div className='grid grid-cols-2 gap-5 my-10'>
                                <LazyLoadImage effect="blur" className='w-full h-[200px]' src={product.img2} alt="" />
                                <LazyLoadImage effect="blur" className='w-full h-[200px]' src={product.img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***************Form visible on sm and below*****************/}
                <div className='block md:hidden'>
                    <form className='py-10' onSubmit={handleSubmit}>
                        <h1 className='text-xl'>Have any Question?</h1>
                        <Box sx={{ margin: '20px 0' }}>
                            <TextField
                                helperText={errors.name || ' '}
                                error={!!errors.name}
                                id="name"
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                helperText={errors.email || ' '}
                                error={!!errors.email}
                                id="email"
                                label="Your E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ width: '100%', marginTop: '20px' }}
                            />
                            <TextField
                                helperText={errors.message || ' '}
                                error={!!errors.message}
                                id="message"
                                label="Message"
                                multiline
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                sx={{ width: '100%', marginTop: '20px' }}
                            />
                        </Box>
                        <button
                            type="submit"
                            className='flex w-full white items-center justify-center py-3 text-white bg-[#4BAF47] mb-8 rounded hover:bg-[#6cd469] transform duration-300 font-semibold'
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <FaSpinner className="animate-spin h-5 w-5 mr-2" />
                            ) : (
                                <>
                                    <span>Submit Question</span>
                                    <IoMdPaperPlane className="text-lg ms-1" />
                                </>

                            )}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Service_details;
