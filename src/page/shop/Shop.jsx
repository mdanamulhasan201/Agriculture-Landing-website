import { useEffect, useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';
import { toast } from 'react-toastify';
import { TbCurrencyTaka } from 'react-icons/tb';
import { TextField, Button, Slider, Checkbox, FormControlLabel, Pagination, Select, MenuItem } from '@mui/material';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [sortOrder, setSortOrder] = useState('default');
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;

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
                setFilteredProducts(data);
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

        fetchProducts();
        fetchCategories();

    }, []);
    useEffect(() => {
        let updatedProducts = [...products];

        // Filter based on search query
        if (searchQuery) {
            updatedProducts = updatedProducts.filter(product =>
                product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter based on selected categories
        if (selectedCategories.length > 0) {
            updatedProducts = updatedProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // Apply sorting
        if (sortOrder === 'a-z') {
            updatedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (sortOrder === 'z-a') {
            updatedProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
        }

        setFilteredProducts(updatedProducts);
    }, [searchQuery, selectedCategories, sortOrder, products]);


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

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(c => c !== category)
                : [...prevCategories, category]
        );
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleApplyPriceFilter = () => {
        let updatedProducts = [...products];

        // Filter based on selected categories
        if (selectedCategories.length > 0) {
            updatedProducts = updatedProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // Apply price filter
        updatedProducts = updatedProducts.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        setFilteredProducts(updatedProducts);
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
                {/* filter option */}
                <div className=' mx-auto flex gap-2 lg:gap-5 justify-between'>
                    {/* left */}
                    <div className='w-5/12 md:w-3/12 mx-auto'>
                        <div className='flex flex-col gap-5'>
                            {/* searchBar */}
                            <TextField
                                label="Search"
                                variant="outlined"
                                fullWidth
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />

                            {/* price filter */}
                            <div className='bg-white shadow-md border p-3'>
                                <h1 className='font-semibold'>Price</h1>
                                <Slider
                                    value={priceRange}
                                    onChange={handlePriceChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={5000}
                                />
                                <div className='flex flex-col sm:flex-row items-center justify-between'>
                                    <p className='flex items-center'><TbCurrencyTaka />{priceRange[0]} - <TbCurrencyTaka />{priceRange[1]}</p>
                                    <Button
                                        onClick={handleApplyPriceFilter}
                                        variant="contained"
                                        color="primary"
                                        sx={{ backgroundColor: '#49A760', '&:hover': { backgroundColor: '#49A760' } }}
                                    >
                                        Apply
                                    </Button>

                                </div>
                            </div>

                            {/* categories */}
                            <div className='bg-white shadow-md border p-5'>
                                <h1 className='font-semibold mb-5'>Categories</h1>
                                <div className='flex flex-col'>
                                    {categories.map((category) => (
                                        <FormControlLabel
                                            key={category.id}
                                            control={
                                                <Checkbox
                                                    value={category.name}
                                                    checked={selectedCategories.includes(category.name)}
                                                    onChange={handleCategoryChange}
                                                />
                                            }
                                            label={category.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* product */}
                    <div className='w-7/12 sm:w-9/12 mx-auto'>
                        {/* right */}
                        <div className='flex items-center mb-7 justify-between'>
                            {/* show data filter number */}
                            <p>Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} results</p>
                            {/* dropdown button sorting */}
                            <div className='flex items-center gap-2'>
                                <p>Sort by:</p>
                                <Select
                                    value={sortOrder}
                                    onChange={handleSortChange}
                                    variant="outlined"
                                    size="small"
                                >
                                    <MenuItem value="default">Default</MenuItem>
                                    <MenuItem value="a-z">A-Z</MenuItem>
                                    <MenuItem value="z-a">Z-A</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 sm:gap-5 md:gap-3 lg:gap-10 xl:gap-5 2xl:gap-4 items-center justify-items-center">
                            {filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(product => {
                                const discountedPrice = product.discount ? (product.price * 0.8).toFixed(2) : null;
                                return (
                                    <div key={product.id} className="bg-white hover:bg-slate-100 transform duration-300 hover:scale-105 shadow-slate-500/25 rounded-lg shadow py-8 sm:py-8 md:py-5 lg:py-7 xl:py-8 2xl:py-8 w-[180px] sm:w-60 md:w-[200px] lg:w-[240px] xl:w-64 2xl:w-64 cursor-pointer">
                                        <Link to={`product-details/${product.id}`}>
                                            <div className='flex justify-center'>
                                                <img className='w-28 h-36 md:w-36 md:h-40 hover:scale-105 transform transition-transform duration-300' src={product.image} alt={product.product_name} />
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
                        <div className="flex justify-center mt-4">
                            <Pagination
                                count={Math.ceil(filteredProducts.length / itemsPerPage)}
                                page={page}
                                onChange={handlePageChange}
                                color="primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
