import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderDetails from '../components/SliderDetails';
// import FeaturedFoods from "../components/FeaturedFoods";
import { Link, useLoaderData } from "react-router-dom";
import slider1 from '../assets/rice.jpg'
import slider2 from '../assets/guava.jpg'
import slider3 from '../assets/lichi.jpg'
import slider4 from '../assets/mango.jpg'
import Food from "../components/Food";
import OurImpact from "../components/OurImpact";
import Aboutus from "../components/Aboutus";

const Home = () => {
    const movie = useLoaderData();
    const sortedFoods = [...movie].sort((a, b) => b.FoodQuantity - a.FoodQuantity);
    const featuredFoods = sortedFoods.slice(0, 6);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,  
    };

    return (
        <>
            <div>
                <Slider {...settings} className='mb-20'>
                    <SliderDetails name='Biriyani' details="Biryani is a mixed rice dish popular in South Asia, made with rice, meat (chicken, goat, lamb, beef) or seafood (prawns or fish), and spices." img={slider1}></SliderDetails>

                    <SliderDetails name='Guava' details='Guava is a common tropical fruit cultivated in many tropical and subtropical regions. The common guava Psidium guajava is a small tree in the myrtle family (Myrtaceae), native to Mexico, Central America, the Caribbean and northern South America.' img={slider2}></SliderDetails>

                    <SliderDetails name='Lichi' details='A tall evergreen tree, it bears small fleshy sweet fruits. The outside of the fruit is a pink-red, rough-textured soft shell.' img={slider3}></SliderDetails>

                    <SliderDetails name='Mango' details='Mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated from the region between northwestern Myanmar, Bangladesh, and northeastern India' img={slider4}></SliderDetails>
                </Slider>
            </div>


            <div className="container mx-auto">
                <p className='flex flex-col gap-3 items-center text-5xl font-extrabold text-[#64ae24]'>
                    Featured food <span className='border-2 border-[#64ae24] w-24'></span></p>

                <div className='grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                    {
                        featuredFoods?.map(feature => <Food key={feature._id} food={feature}></Food>)
                    }
                </div>
                <Link to='/available-foods'><button className="mt-8 ml-5 text-2xl font-semibold px-10 hover:bg-blue-500 hover:text-white py-3 border border-blue-500 rounded-md transition-all duration-200">Show all</button></Link>
            </div>


            <div className="bg-[#f9f5e0] mt-20">
                <OurImpact></OurImpact>
            </div>
            <div className="">
                <Aboutus></Aboutus>
            </div>
        </>
    );
};

export default Home;