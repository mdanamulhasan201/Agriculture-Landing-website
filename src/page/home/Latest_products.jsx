import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';


const LatestProducts = () => {
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
            dispatch(addToCart(product));
            toast.success(`Added ${product.product_name} to cart!`);
        }
    };


    return (
        <div className="bg-[#E9F1EE]">
            <div className="max-w-screen-xl mx-auto py-10 px-5">
                <div>
                    <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-xl text-center'>Recently Added</p>
                    <h1 className="text-center text-3xl font-semibold font-monrope">Latest Products</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 items-center justify-center justify-items-center mt-10">
                    {products.slice(0, 10).map(product => (
                        <div key={product.id} className="bg-white hover:bg-slate-100 transform duration-300 hover:scale-105 shadow-slate-500/25 rounded-lg shadow py-8 w-60 cursor-pointer">
                            <Link to={`product-details/${product.id}`}>
                                <div className='flex justify-center'>
                                    <img className='w-40 hover:scale-105 transform transition-transform duration-300' src={product.image} alt="" />
                                </div>
                                <p className='text-center text-[12px] font-serif text-[#666666]'>{product.title}</p>
                                <h2 className="text-md font-semibold text-center font-monrope mt-1">{product.product_name}</h2>
                                <p className="mt-1 flex items-center justify-center text-[#49A760] font-semibold "><TbCurrencyTaka className='text-xl' />{product.price}</p>
                            </Link>
                            <div className='flex justify-center pt-2'>
                                <button onClick={() => handleAddToCart(product)} className='border border-[#F7C35F] transform duration-300 hover:text-white uppercase font-semibold text-[12px] font-monrope hover:bg-[#F7C35F] px-4 py-1 rounded-full'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;
