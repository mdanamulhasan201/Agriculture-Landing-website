import  { useState } from 'react';
import { IoMdHome, IoMdPaperPlane } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaSpinner } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../assets/contact/div.elementor-widget-wrap.png';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            toast.success('Message sent successfully!');
            reset();
        }, 2000);
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
            {/* banner */}
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Contact</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome />
                                Home </span>
                        </Link> / Contact
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-10 xl:px-24 2xl:px-0 my-5">
                {/* contact section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="bg-[#4BAF47] p-10 text-white rounded-md">
                        <h1 className="text-3xl font-semibold" style={{ fontFamily: "'Covered By Your Grace', cursive" }}>About</h1>
                        <p className="mt-3 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora quibusdam vero iusto, atque, porro reiciendis voluptatem nam?</p>
                    </div>
                    <div className="bg-[#C5CE38] p-10 text-white rounded-md">
                        <h1 className="text-3xl font-semibold" style={{ fontFamily: "'Covered By Your Grace', cursive" }}>Contact</h1>
                        <p className="mt-3 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora quibusdam vero iusto, atque, porro reiciendis voluptatem nam?</p>
                    </div>
                    <div className="bg-[#eec144] p-10 text-white rounded-md">
                        <h1 className="text-3xl font-semibold" style={{ fontFamily: "'Covered By Your Grace', cursive" }}>Address</h1>
                        <p className="mt-3 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora quibusdam vero iusto, atque, porro reiciendis voluptatem nam?</p>
                    </div>
                </div>
                {/* message section */}
                <div className="flex flex-col items-center md:flex-row my-10 ">
                    {/* leaflet map */}
                    <div className="w-full md:w-6/12 -z-50">
                        <MapContainer center={[23.8103, 90.4125]} zoom={12} style={{ height: "528px", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[23.8103, 90.4125]}>
                                <Popup>Mirpur, Bangladesh</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    {/* contact form */}
                    <div className="w-full md:w-6/12">
                        <div className="p-14 bg-[#F8F7F0]" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <h1 className="text-2xl font-semibold font-monrope">Get In Touch</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-row gap-2 w-full">
                                        <TextField
                                            label="Your Name"
                                            variant="outlined"
                                            fullWidth
                                            {...register('name', { required: 'Name is required' })}
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            className="md:w-1/2"
                                        />
                                        <TextField
                                            label="Your Email"
                                            variant="outlined"
                                            type="email"
                                            fullWidth
                                            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            className="md:w-1/2"
                                        />
                                    </div>
                                    <TextField
                                        label="Subject"
                                        variant="outlined"
                                        fullWidth
                                        {...register('subject', { required: 'Subject is required' })}
                                        error={!!errors.subject}
                                        helperText={errors.subject?.message}
                                    />
                                    <TextField
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        {...register('message', { required: 'Message is required' })}
                                        error={!!errors.message}
                                        helperText={errors.message?.message}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-5 flex items-center justify-center gap-2 w-full p-3 hover:bg-[#EEC044] text-white rounded-md bg-[#4BAF47] transform duration-300"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <FaSpinner className="animate-spin" />
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <IoMdPaperPlane className="text-md" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
