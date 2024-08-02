
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            testimonial: "This service is fantastic! It has changed my life for the better.",
            position: "CEO, Company ABC",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Jane Smith",
            testimonial: "Amazing experience! Highly recommend to everyone.",
            position: "Marketing Manager, Company XYZ",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Bob Johnson",
            testimonial: "Exceptional quality and great support. Love it!",
            position: "Developer, Tech Solutions",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            name: "Alice Brown",
            testimonial: "Great value for money. Exceeded my expectations!",
            position: "Designer, Creative Co.",
            image: "https://via.placeholder.com/150"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div
            className='my-10'
            style={{
                backgroundImage: `url("https://i.ibb.co/1KqfNY3/Section.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '50px 0'
            }}
        >
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-24 lg:px-20 xl:px-24 2xl:px-0 my-10">
                <div>
                    <p style={{ fontFamily: "'Covered By Your Grace', cursive" }} className='text-[#EEC044] text-center text-2xl'>Our Testimonials</p>
                    <h1 className="text-center text-4xl font-semibold mb-10">
                        What We <span className='text-[#4BAF47]'>Offer</span>
                    </h1>
                    <Slider {...settings}>
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="px-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center h-full">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-24 rounded-full mb-4"
                                    />
                                    <p className="text-gray-600 mb-4 flex-grow">"{testimonial.testimonial}"</p>
                                    <h3 className="text-xl font-semibold text-[#4BAF47]">{testimonial.name}</h3>
                                    <p className="text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
