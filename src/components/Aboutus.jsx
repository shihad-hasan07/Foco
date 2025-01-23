import React from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import tick from '../assets/doubletick.png'
import { FaRegCircleQuestion } from 'react-icons/fa6';

const Aboutus = () => {
    return (
        <>
            <div>
                <p className='flex mt-12 flex-col gap-3 items-center text-5xl font-extrabold text-[#64ae24]'>
                    About us <span className='border-2 border-[#64ae24] w-24'></span>
                </p>

                <div className='grid md:grid-cols-2 gap-x-4 justify-between px-10 max-w-[1400px] mx-auto my-10'>
                    <div>
                        <p >NB! Foco is not a charity!</p>
                        <p className='flex gap-2 items-center mt-2'> <img src={tick} className='w-4 h-5' /> Foco comes from the word Foodsharing.</p>
                        <p className='flex gap-2 mt-2'> <img src={tick} className='w-4 h-5' /> Through Foco, individuals, traders and producers can offer or collect food that would otherwise be thrown away.</p>
                        <p className='flex gap-2 mt-2'> <img src={tick} className='w-4 h-5' /> Foodsharing rescues and distributes leftover food, fighting against food waste.</p>
                    </div>
                    <div>
                        <p className='flex gap-2 mt-2 md:mt-0'> <img src={tick} className='w-4 h-5' /> Foco gives rescued food the opportunity to find its way to people who want it, instead of the food ending up in the trash.</p>
                        <p className='flex gap-2 mt-2'> <img src={tick} className='w-4 h-5' /> Foco aims to reduce the amount of food wasted and broaden the worldview of its fellow citizens.</p>
                    </div>
                </div>
            </div>

            <div className=' xl:px-44 2xl:px-48 bg-[#f9f5e0]'>
                <div className="conatiner px-16 py-12 mx-auto">
                    <div className="collapse collapse-arrow border border-[#f9f5e0] rounded-md bg-white ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-bold flex gap-2 items-center"><FaRegCircleQuestion size={16} />What’s Foco?</div>
                        <div className="collapse-content text-[17px]">
                            <p>Foco is a movement that saves and distributes leftover food in Tartu, cooperating with individuals, retailers, companies and food producers.</p>
                        </div>
                    </div>

                    <div className="mt-2 collapse collapse-arrow border border-[#f9f5e0] rounded-md bg-white ">
                        <input type="radio" name="my-accordion-2"/>
                        <div className="collapse-title text-xl font-bold flex gap-2 items-center"><FaRegCircleQuestion size={16} />Where does this idea come from?</div>
                        <div className="collapse-content text-[17px]">
                            <p>The idea comes from Germany, which has a large network of foodsharing points that are organized and developed by thousands of volunteers. The development of such a network is only possible thanks to active people and laws against the generation of food waste. Foodsharing points are marked on a map and information is up on our website.</p>
                        </div>
                    </div>

                    <div className="mt-2 collapse collapse-arrow border border-[#f9f5e0] rounded-md bg-white ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold flex gap-2 items-center"><FaRegCircleQuestion size={16} />What are we up to?</div>
                        <div className="collapse-content text-[17px]">
                            <p className='flex flex-col gap-1'>We help distribute leftover food;
                                <span>We create and maintain foodsharing points;</span>
                                <span>We share information on social media and at schools;</span>
                                <span>We are constantly looking for new partners</span></p>
                        </div>
                    </div>

                    <div className="mt-2 collapse collapse-arrow border border-[#f9f5e0] rounded-md bg-white ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold flex gap-2 items-center"><FaRegCircleQuestion size={16} />Who are the people behind Foco?</div>
                        <div className="collapse-content text-[17px]">
                            <p>Foco functions only thanks to the volunteers and people who donate resources necessary to keep it running smoothly and creating/maintaining foodsharing points..</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Aboutus;