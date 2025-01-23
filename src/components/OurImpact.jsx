import React from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { PiStudentBold } from 'react-icons/pi';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';

const OurImpact = () => {
    return (
        <div className='container mx-auto text-center py-14'>
            <p className='flex flex-col gap-4 items-center text-5xl font-extrabold text-[#64ae24]'>
                Our Impact <span className='border-2 border-[#64ae24] w-24'></span></p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-y-16 gap-x-4 px-5'>
                <div className='flex  flex-col items-center'>
                    <FaHome size={130} color='#d32730' className='border-[5px] border-black rounded-full p-5' />
                    <p className='mt-5 opacity-80 max-w-80'>We provide food to 88 schools in 4 school boards, across Kingston, Frontenac and Lennox & Addington</p>
                </div>

                <div className='flex  flex-col items-center'>
                    <RiShoppingBasketFill size={130} color='#d32730' className='border-[5px] border-black rounded-full p-5' />
                    <p className='mt-5 opacity-80 max-w-80'>Our volunteers pack over $20,000 of food every week, over half a million dollars of food over the course of the school year</p>
                </div>

                <div className='flex  flex-col items-center'>
                    <TbTruckDelivery size={130} color='#d32730' className='border-[5px] border-black rounded-full p-5' />
                    <p className='mt-5 opacity- max-w-80'>Our drivers deliver food directly to the schools’ front doors,  over 600kms per week</p>
                </div>

                <div className='flex  flex-col items-center'>
                    <GiMeal size={130} color='#d32730' className='border-[5px] border-black rounded-full p-5' />
                    <p className='mt-5 opacity- max-w-80'>Over 12,000 meals or snacks per week are provided by schools with the food we provide</p>
                </div>

                <div className='flex  flex-col items-center'>
                    <PiStudentBold size={130} color='#d32730' className='border-[5px] border-black rounded-full p-5' />
                    <p className='mt-5 opacity- max-w-80'>Over the course of a school year, 16,000 students – half of all enrolled in the region – access their school’s nutrition program, either regularly or on occasion</p>
                </div>

                <div className='flex  flex-col items-center'>
                    <BiSolidDonateHeart size={130} color='#d32730' className='border-[5px] border-black rounded-full p-5' />
                    <p className='mt-5 opacity- max-w-80'>Over 1000 volunteer hours are accrued each week to deliver nutrition programs in schools </p>
                </div>
            </div>
        </div>
    );
};

export default OurImpact;