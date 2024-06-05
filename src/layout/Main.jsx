import  { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Preloader from '../components/Preloade';


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);


        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                </>
            )}
        </div>
    );
};

export default Main;
