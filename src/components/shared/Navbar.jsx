import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Submenu from './Submenu';
import { IoCartOutline, IoSearchSharp } from 'react-icons/io5';
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
    const [searchModalOpen, setSearchModalOpen] = useState(false);



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
    const handleSearchModalOpen = () => setSearchModalOpen(true);
    const handleSearchModalClose = () => setSearchModalOpen(false);

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
                    <div className="flex items-center justify-between md:py-4 py-5">
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

                        <div className="flex justify-between items-center w-full lg:hidden">
                            <Link to='/'>
                                <img className=' w-28' src='https://i.ibb.co/wsZpB6J/logo.png' alt="Logo" />
                            </Link>
                            <div>
                                <div className="flex gap-5 items-center ">
                                    {/* searchBar icon*/}
                                    <Badge badgeContent={1} color="success" onClick={handleCartModalOpen} sx={{ cursor: 'pointer' }}>
                                        <AddShoppingCartSharpIcon className='bg-[#ECF5E8]' style={{ height: '40px', width: '40px', borderRadius: '50%', padding: '10px' }} />
                                    </Badge>
                                    <Badge badgeContent={1} color="success" onClick={handleFavoriteModalOpen} sx={{ cursor: 'pointer' }}>
                                        <FavoriteBorderIcon className='bg-[#ECF5E8]' style={{ height: '40px', width: '40px', borderRadius: '50%', padding: '10px' }} />
                                    </Badge>
                                    <IoSearchSharp className='text-2xl' onClick={handleSearchModalOpen} />
                                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-600 ">
                                        {isOpen ? <RxCross2 className='text-3xl' /> : <BiMenuAltRight className='text-3xl' />}
                                    </button>
                                </div>
                            </div>

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


                </div>
            </nav>
            {/* Modal for search bar */}
            <Modal
                aria-labelledby="search-modal-title"
                aria-describedby="search-modal-description"
                open={searchModalOpen}
                onClose={handleSearchModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    style: {
                        backdropFilter: 'blur(5px)', // Adding background blur
                    },
                }}
            >
                <Fade in={searchModalOpen} timeout={500}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', sm: '80%', md: 800 },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                    }}>
                        <IconButton
                            aria-label="close"
                            onClick={handleSearchModalClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography id="search-modal-title" variant="h6" component="h2" fontWeight="bold" className='mb-52'>
                            Search
                        </Typography>
                        {/* Your search bar component goes here */}
                        <Searchbar />
                    </Box>
                </Fade>
            </Modal>

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
                        width: { xs: '90%', sm: '80%', md: 800 },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
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
                        <Box sx={{ mt: 2, maxHeight: '60vh', overflow: 'auto' }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
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
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 2 }}>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ mb: { xs: 2, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}
                            >
                                View Full Cart
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                                onClick={() => console.log('Checkout button clicked')}
                            >
                                Proceed to Checkout
                            </Button>
                        </Box>
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
                        width: { xs: '90%', sm: '80%', md: 800 },
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
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
                        <Box sx={{ mt: 2, maxHeight: '60vh', overflow: 'auto' }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead>
                                    <TableRow>
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
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 2 }}>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ mb: { xs: 2, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}
                            >
                                View Wishlist
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                                onClick={() => console.log('Checkout button clicked')}
                            >
                                Proceed to Checkout
                            </Button>
                        </Box>

                    </Box>

                </Fade>
            </Modal>
        </div>
    );
};

export default Navbar;
