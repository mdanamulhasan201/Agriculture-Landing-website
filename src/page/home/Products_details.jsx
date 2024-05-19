import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products_details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/product.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                const selectedProduct = data.find(p => p.id === parseInt(id));
                setProduct(selectedProduct);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = (product) => {
        toast.success(`Added ${product.product_name} to cart! Quantity: ${quantity}`);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleQuantityChange = (event) => {
        const value = event.target.value;
        if (/^\d+$/.test(value)) {
            setQuantity(parseInt(value, 10));
        } else if (value === '') {
            setQuantity('');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
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
            <div style={divStyle}>
                <div>
                    <p className="text-center text-white opacity-75">Home / product / product-details</p>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Product Details</h1>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto py-10'>
                <div className='flex flex-col md:flex-row items-center'>
                    <img src={product.image} alt={product.product_name} className='w-1/2 p-5 md:w-1/3 rounded-lg shadow-slate-400/35 bg-[#f7f4f0]' />
                    <div className='md:ml-10 mt-5 md:mt-0'>
                        <div className='flex items-center gap-5'>
                            <h2 className="text-3xl font-bold font-monrope">{product.product_name}</h2>
                            <p className="mt-2 text-xl text-[#49A760] flex items-center font-monrope"><TbCurrencyTaka className='text-2xl' />{product.price}</p>
                        </div>
                        <p className='mt-3 text-[#878680] text-[13px] font-monrope'>({product.review} Customer Review)</p>
                        <hr className='my-5' />
                        <p className="mt-5 text-[#878680] font-sans">{product.description}</p>

                        <div className='mt-5'>
                            <h1 className='text-lg font-semibold'>Choose Quantity</h1>
                            <div className='flex items-center mt-2'>
                                <button onClick={decrementQuantity} className='border border-[#F7C35F] px-2 py-1 rounded-l-full'>-</button>
                                <input
                                    type='text'
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    className='w-12 text-center border-t border-b border-[#F7C35F] focus:outline-none'
                                />
                                <button onClick={incrementQuantity} className='border border-[#F7C35F] px-2 py-1 rounded-r-full'>+</button>
                            </div>
                        </div>

                        <button onClick={() => handleAddToCart(product)} className='mt-5 border border-[#F7C35F] transform duration-300 hover:text-white uppercase font-semibold text-[12px] font-monrope hover:bg-[#F7C35F] px-4 py-2 rounded-full'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products_details;
