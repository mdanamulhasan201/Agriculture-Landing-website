import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import './style.css'
import navbr from '../../assets/nav.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchRef]);

    return (
        <div>
            <Submenu />
            <nav style={{ backgroundImage: `url(${navbr})` }} className="custom-navbar absolute w-full">
                <div className="max-w-screen-xl mx-auto px-5">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">

                            <div className="hidden lg:flex xl:space-x-12 md:space-x-4">
                                <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                <Link to='/about' className="block px-3 py-2 rounded-md text-base font-medium">About</Link>
                                <Link to='/service' className="block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                                <Link to='/products' className="block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                                <Link to='/news' className="block px-3 py-2 rounded-md text-base font-medium">News</Link>
                                <Link to='/shop' className="block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
                                <Link to='/contact' className="block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                            </div>
                        </div>

                        {/* Search and Cart icons for larger screens */}
                        <div className="hidden lg:flex items-center gap-10">
                            {isSearchOpen ? (
                                <div className="relative" ref={searchRef}>
                                    <input type="text" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                        autoFocus placeholder="Search..." />
                                    <button className="absolute right-0 top-0 mt-2 mr-4">
                                        <IoSearchOutline className='text-xl' />
                                    </button>
                                </div>
                            ) : (
                                <IoSearchOutline className='text-xl cursor-pointer' onClick={() => setIsSearchOpen(true)} />
                            )}
                            <IoCartOutline className='text-2xl' />
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-600 hover:bg-green-700 focus:outline-none">
                                {isOpen ? <RxCross2 className='text-3xl' /> : <BiMenuAltRight className='text-3xl' />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu content */}
                <div className={isOpen ? 'menu-visible' : 'menu-hidden'} style={{ backgroundColor: 'white' }}>
                    {/* Mobile navigation links */}
                    <div className="px-2 pt-2 pb-3 space-y-1 text-center">
                        <Link to='/' className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to='/about' className="block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to='/service' className="block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link to='/products' className="block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                        <Link to='/news' className="block px-3 py-2 rounded-md text-base font-medium">News</Link>
                        <Link to='/shop' className="block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
                        <Link to='/contact' className="block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>

                    {/* Mobile search and cart */}
                    <div className="flex flex-col items-center space-y-5 pb-20">
                        {isSearchOpen ? (
                            <div className="relative" ref={searchRef}>
                                <input type="text" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    autoFocus placeholder="Search..." />
                                <button className="absolute right-0 top-0 mt-2 mr-4">
                                    <IoSearchOutline className='text-2xl' />
                                </button>
                            </div>
                        ) : (
                            <IoSearchOutline className='text-2xl cursor-pointer' onClick={() => setIsSearchOpen(true)} />
                        )}
                        <IoCartOutline className='text-2xl' />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
