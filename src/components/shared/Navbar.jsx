import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Submenu from './Submenu';
import { IoCartOutline } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import './style.css';
import navbr from '../../assets/nav.png';
import Searchbar from '../searchbar/Searchbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Badge, Modal, Box, Typography, IconButton, Fade, Backdrop, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [favoriteModalOpen, setFavoriteModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCartModalOpen = () => setCartModalOpen(true);
    const handleCartModalClose = () => setCartModalOpen(false);

    const handleFavoriteModalOpen = () => setFavoriteModalOpen(true);
    const handleFavoriteModalClose = () => setFavoriteModalOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundImage: isScrolled ? 'none' : `url(${navbr})`,
        backgroundColor: isScrolled ? '#F8F7F1' : 'transparent',
    };

    const isActiveLink = (path) => location.pathname === path ? 'text-green-500 underline underline-offset-4' : '';

    return (
        <div>
            <Submenu />
            <nav style={navbarStyle} className={`custom-navbar w-full ${isScrolled ? 'fixed top-0 z-50 shadow-lg' : 'absolute'}`}>
                <div className="max-w-screen-xl mx-auto px-5">
                    <div className="flex items-center justify-between h-[75px]">
                        <div className="flex items-center">
                            <div className="hidden lg:flex xl:space-x-12 md:space-x-4">
                                <NavLink
                                    to='/'
                                    exact
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300 ${isActiveLink('/')}`}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to='/about'
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300 ${isActiveLink('/about')}`}
                                >
                                    About
                                </NavLink>
                                <div>
                                    <button
                                        aria-controls={open ? 'services-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300`}
                                    >
                                        Services
                                    </button>
                                    <Menu
                                        id="services-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'services-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Service 1</MenuItem>
                                        <MenuItem onClick={handleClose}>Service 2</MenuItem>
                                        <MenuItem onClick={handleClose}>Service 3</MenuItem>
                                    </Menu>
                                </div>
                                <NavLink
                                    to='/products'
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300 ${isActiveLink('/products')}`}
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to='/news'
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300 ${isActiveLink('/news')}`}
                                >
                                    News
                                </NavLink>
                                <NavLink
                                    to='/shop'
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300 ${isActiveLink('/shop')}`}
                                >
                                    Shop
                                </NavLink>
                                <NavLink
                                    to='/contact'
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-green-500 hover:underline hover:underline-offset-4 duration-300 ${isActiveLink('/contact')}`}
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center gap-7">
                            <Searchbar />
                            <Badge badgeContent={1} color="success" onClick={handleCartModalOpen} sx={{ cursor: 'pointer' }}>
                                <AddShoppingCartSharpIcon className='bg-[#ECF5E8]' style={{ height: '40px', width: '40px', borderRadius: '50%', padding: '10px' }} />
                            </Badge>
                            <Badge badgeContent={1} color="success" onClick={handleFavoriteModalOpen} sx={{ cursor: 'pointer' }}>
                                <FavoriteBorderIcon className='bg-[#ECF5E8]' style={{ height: '40px', width: '40px', borderRadius: '50%', padding: '10px' }} />
                            </Badge>
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
                <div className={isOpen ? 'menu-visible' : 'menu-hidden'} style={{ backgroundColor: '#F8F7F1' }}>
                    {/* Mobile navigation links */}
                    <div className="px-2 pt-2 pb-3 space-y-1 text-center">
                        <NavLink to='/' exact className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/')}`}>Home</NavLink>
                        <NavLink to='/about' className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/about')}`}>About</NavLink>
                        <NavLink to='/service' className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/service')}`}>Services</NavLink>
                        <NavLink to='/products' className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/products')}`}>Products</NavLink>
                        <NavLink to='/news' className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/news')}`}>News</NavLink>
                        <NavLink to='/shop' className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/shop')}`}>Shop</NavLink>
                        <NavLink to='/contact' className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveLink('/contact')}`}>Contact</NavLink>
                    </div>

                    {/* Mobile search and cart */}
                    <div className="flex flex-col items-center space-y-5 pb-20">
                        <Searchbar />
                        <IoCartOutline className='text-2xl' />
                    </div>
                </div>
            </nav>

            <Modal
                aria-labelledby="cart-modal-title"
                aria-describedby="cart-modal-description"
                open={cartModalOpen}
                onClose={handleCartModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={cartModalOpen} timeout={500}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                        '&.modal-content-enter': {
                            transform: 'scale(0.8)',
                            opacity: 0,
                        },
                        '&.modal-content-enter-active': {
                            transform: 'scale(1)',
                            opacity: 1,
                        },
                        '&.modal-content-exit': {
                            transform: 'scale(1)',
                            opacity: 1,
                        },
                        '&.modal-content-exit-active': {
                            transform: 'scale(0.8)',
                            opacity: 0,
                        },
                    }}>
                        <IconButton
                            aria-label="close"
                            onClick={handleCartModalClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="cart-modal-title" variant="h6" component="h2" fontWeight="bold">
                            Cart Items
                        </Typography>
                        <Typography id="cart-modal-description" sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow align="center">
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Product
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Price
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Quantity
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Remove
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">Sample Product</TableCell>
                                        <TableCell align="center">$10.00</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="remove" onClick={decreaseQuantity}>
                                                <RemoveIcon />
                                            </IconButton>
                                            {quantity}
                                            <IconButton aria-label="add" onClick={increaseQuantity}>
                                                <AddIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="center">$10.00</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="remove">
                                                <CloseIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Button variant="contained" color="success" onClick={handleCartModalClose}>
                                    View Full cart
                                </Button>
                                <Button variant="contained" color="secondary" onClick={() => console.log('Checkout button clicked')}>
                                    Process to   Checkout
                                </Button>
                            </Box>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="favorite-modal-title"
                aria-describedby="favorite-modal-description"
                open={favoriteModalOpen}
                onClose={handleFavoriteModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={favoriteModalOpen} timeout={500}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                        '&.modal-content-enter': {
                            transform: 'scale(0.8)',
                            opacity: 0,
                        },
                        '&.modal-content-enter-active': {
                            transform: 'scale(1)',
                            opacity: 1,
                        },
                        '&.modal-content-exit': {
                            transform: 'scale(1)',
                            opacity: 1,
                        },
                        '&.modal-content-exit-active': {
                            transform: 'scale(0.8)',
                            opacity: 0,
                        },
                    }}>
                        <IconButton
                            aria-label="close"
                            onClick={handleFavoriteModalClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="cart-modal-title" variant="h6" component="h2" fontWeight="bold">
                            Wishlist Items
                        </Typography>
                        <Typography id="cart-modal-description" sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow align="center">
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Product
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Price
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Quantity
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="body1" fontWeight="bold">
                                                Remove
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* Sample row - replace with dynamic data */}
                                    <TableRow>
                                        <TableCell align="center">Sample Product</TableCell>
                                        <TableCell align="center">$10.00</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="remove" onClick={decreaseQuantity}>
                                                <RemoveIcon />
                                            </IconButton>
                                            {quantity}
                                            <IconButton aria-label="add" onClick={increaseQuantity}>
                                                <AddIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="center">$10.00</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="remove">
                                                <CloseIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                <Button variant="contained" color="success" onClick={handleCartModalClose}>
                                    View Wishlist
                                </Button>
                                <Button variant="contained" color="secondary" onClick={() => console.log('Checkout button clicked')}>
                                    Checkout
                                </Button>
                            </Box>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Navbar;
