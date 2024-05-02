

import bg from '../assets/bg.png';  // Ensure the path to your image is correct
import Card from './home/Card';

const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover bg-center text-white flex items-center h-[780px] ">
                <div className='w-full max-w-screen-xl mx-auto px-4 lg:px-8'>
                    <p className='text-left text-sm md:text-base lg:text-lg font-light uppercase'>Welcome to Agrios Farming</p>
                    <h1 className='text-left text-2xl md:text-4xl lg:text-8xl font-bold leading-tight mt-2' style={{ fontFamily: "'Covered By Your Grace', cursive" }}>Agriculture &<br />Eco Farming</h1>
                    <p className='mt-5 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

            </div>
            <div>
                <Card></Card>
            </div>
        </>


    );
};

export default Home;
