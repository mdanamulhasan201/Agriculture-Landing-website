import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, TextField } from '@mui/material';
import { toast } from 'react-toastify';

const Service_details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

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
            toast.success('Your question has been submitted!');
            setName('');
            setEmail('');
            setMessage('');
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

    return (
        <div>
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Service Details</h1>
                    <p className="text-center text-white opacity-75 mt-2"><Link className='hover:text-[#4BAF47] transform duration-300' to='/'>Home</Link> / {product.offerName}</p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-6 mt-20">
                <div className='flex justify-center flex-col md:flex-row md:items-start items-center gap-5 w-full'>
                    <div className='md:w-4/12 w-full'>
                        <div className=' bg-[#F6F6F6]'>
                            <div className='py-14 px-5'>
                                <h1 className='text-xl font-semibold'>Service List </h1>
                                <div className='bg-[#FFFFFF] mt-5'>
                                    <Link className='py-3 px-3 flex justify-between items-center text-gray-500'>Agriculture Products <span><ArrowRightAltIcon /></span></Link>
                                </div>
                                <div className='bg-[#FFFFFF] mt-5'>
                                    <Link className='py-3 px-3 flex justify-between items-center text-gray-500'>Organic Products <span><ArrowRightAltIcon /></span></Link>
                                </div>
                                <div className='bg-[#FFFFFF] mt-5'>
                                    <Link className='py-3 px-3 flex justify-between items-center text-gray-500'>Dairy Products<span><ArrowRightAltIcon /></span></Link>
                                </div>
                                <div className='bg-[#FFFFFF] mt-5'>
                                    <Link className='py-3 px-3 flex justify-between items-center text-gray-500'>Fresh Vegetables<span><ArrowRightAltIcon /></span></Link>
                                </div>
                                <div className='bg-[#FFFFFF] mt-5'>
                                    <Link className='py-3 px-3 flex justify-between items-center text-gray-500'>Poultry Products<span><ArrowRightAltIcon /></span></Link>
                                </div>
                            </div>
                        </div>
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
                                    sx={{ width: '100%' }}
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
                                    sx={{ width: '100%' }}
                                />
                            </Box>
                            <button type="submit" className='px-8 py-3 text-white bg-[#4BAF47] mb-8 rounded hover:bg-[#6cd469] transform duration-300 font-semibold'>Submit Question</button>
                        </form>
                    </div>
                    <div className='md:w-8/12 w-full'>
                        <div>
                            <img src={product.img2} alt={product.offerName} className="w-full" />
                            <h1 className="text-4xl font-semibold font-monrope mt-5">{product.offerName}</h1>
                            <p className="text-[#878680] mt-2">{product.title}</p>
                            <div className="mt-5">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service_details;
