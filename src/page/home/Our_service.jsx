import { useEffect, useState } from 'react';

const Our_service = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('whatWeOffer.json');
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
    return (
        <div className="bg-[#F8F7F0]">
            <div className="max-w-screen-xl mx-auto py-10 px-5">
                <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-center text-xl'>Our Services</p>
                <h1 className="text-center text-4xl font-semibold font-monrope">
                    What We <span className='text-green-500'>Offer</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center  my-10">
                    {
                        products.map((product) => (
                            <div key={product.id} className="relative bg-[#FFFFFF] w-64 overflow-hidden">
                                <img className='h-40 w-64' src={product.img1} alt="" />
                                <div className="absolute top-[45%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5CE38] w-16 h-16 rounded-md flex items-center justify-center">
                                    <img src={product.icon} alt="" className="w-10" />
                                </div>
                                <div className='p-5'>
                                    <div className="mt-5">
                                        <h1 className="text-xl font-semibold my-2 font-monrope">{product.offerName}</h1>
                                        <p className="text-[#878680]">{product.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Our_service;
