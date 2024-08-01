
import { useEffect, useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';
import { toast } from 'react-toastify';
import { TbCurrencyTaka } from 'react-icons/tb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('product.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            toast.error(`${product.product_name} is already in the cart!`);
        } else {
            const discountedPrice = product.discount ? (product.price * 0.8).toFixed(2) : product.price;
            dispatch(addToCart({ ...product, price: discountedPrice, quantity: 1 }));
            toast.success(`Added ${product.product_name} to cart!`);
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
            {/* banner */}
            <div style={divStyle}>
                <div>
                    <h1 className='text-center text-white text-4xl font-bold font-monrope mt-5'>Our Shop</h1>
                    <p className="text-center text-white opacity-75 mt-2 flex justify-center items-center">
                        <Link className='hover:text-[#4BAF47] transform duration-300' to='/'>
                            <span className='flex items-center gap-1'><IoMdHome />
                                Home </span>
                        </Link> / Shop
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-10 xl:px-24 2xl:px-0 my-5">



                {/* shop */}
                <div className='w-full mx-auto flex gap-2 justify-between'>
                    {/* left */}
                    <div className='w-5/12 md:w-3/12 mx-auto'>
                        <div className='flex flex-col gap-5'>
                            {/* searchBar */}
                            <div >
                                <input type="search" className='bg-red-300 w-full' />
                            </div>
                            {/* price filter */}
                            <div className='bg-white shadow-md border p-3'>
                                <h1>Price</h1>
                                <input className='w-full' type="range" />
                                <div className='flex flex-col sm:flex-row items-center justify-between'>
                                    <p>$20-$500</p>
                                    <button className='bg-green-500 px-2 py-1 rounded-md text-white'>Apply</button>
                                </div>
                            </div>

                            {/* categories */}
                            <div className='bg-white shadow-md border p-5'>
                                <h1>Categories</h1>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className='w-7/12 sm:w-9/12 mx-auto'>
                 
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 sm:gap-5 md:gap-3 lg:gap-10 xl:gap-5 2xl:gap-4 items-center justify-center justify-items-center ">
                                {products.map(product => {
                                    const discountedPrice = product.discount ? (product.price * 0.8).toFixed(2) : null;
                                    return (
                                        <div key={product.id} className="bg-white hover:bg-slate-100 transform duration-300 hover:scale-105 shadow-slate-500/25 rounded-lg shadow py-8 sm:py-8 md:py-5 lg:py-7 xl:py-8 2xl:py-8 w-[180px] sm:w-60 md:w-[200px] lg:w-[240px] xl:w-64 2xl:w-64 cursor-pointer">
                                            <Link to={`product-details/${product.id}`}>
                                                <div className='flex justify-center'>
                                                    <img className='w-40 md:w-36 hover:scale-105 transform transition-transform duration-300' src={product.image} alt="" />
                                                </div>
                                                <p className='text-center text-[12px] font-serif text-[#666666]'>{product.title}</p>
                                                <h2 className="text-md font-semibold text-center font-monrope mt-1">{product.product_name}</h2>
                                                {discountedPrice ? (
                                                    <div className="mt-1 flex flex-col items-center justify-center">
                                                        <p className="text-red-500 line-through flex items-center"><TbCurrencyTaka className='text-xl' />{product.price}</p>
                                                        <p className="text-[#49A760] font-semibold flex items-center"><TbCurrencyTaka className='text-xl' />{discountedPrice}</p>
                                                    </div>
                                                ) : (
                                                    <p className="mt-1 flex items-center justify-center text-[#49A760] font-semibold "><TbCurrencyTaka className='text-xl' />{product.price}</p>
                                                )}
                                            </Link>
                                            <div className='flex justify-center pt-2'>
                                                <button onClick={() => handleAddToCart(product)} className='border border-[#F7C35F] transform duration-300 hover:text-white uppercase font-semibold text-[12px] font-monrope hover:bg-[#F7C35F] px-4 py-1 rounded-full'>Add to cart</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                     

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;