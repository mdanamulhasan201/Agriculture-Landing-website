import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Preloader from '../components/Preloade';
import Footer from '../components/shared/Footer';


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);

        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(loadingTimeout);
    }, [location]);

    return (
        <div>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Main;
