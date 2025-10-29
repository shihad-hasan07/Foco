import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../components/Food';
import { TfiLayoutColumn3, TfiLayoutColumn2 } from 'react-icons/tfi';

const AvailableFoods = () => {
    const loaderData = useLoaderData();
    const [allFoods, setAllFoods] = useState(loaderData);
    const [searchItem, setSearchItem] = useState('');
    const [column2, setcolumn2] = useState(false);

    const filterdItem = allFoods?.filter(food =>
        food.FoodName.toLowerCase().includes(searchItem.toLowerCase())
    );

    const sorted = () => {
        const sorted = [...allFoods].sort(
            (a, b) => new Date(a.ExpiredDateTime) - new Date(b.ExpiredDateTime)
        );
        setAllFoods(sorted);
    };

    const toogleColumn = () => {
        setcolumn2(!column2);
    };

    return (
        <div className='mb-12 px-3 sm:px-5 md:px-8'>
            <div className='container my-10 mx-auto flex flex-col sm:flex-row justify-between items-center gap-5'>
                <p className='text-2xl sm:text-3xl font-semibold text-center sm:text-left'>Available food</p>

                <div className='flex flex-wrap justify-center sm:justify-end gap-4'>
                    <div className="p-3 sm:p-5 overflow-hidden w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] hover:w-[230px] sm:hover:w-[270px] bg-[#17c3b2] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center transition-all duration-300">
                        <div className="flex items-center justify-center fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={22} height={22}>
                                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder='Search...'
                            className="outline-none text-[16px] sm:text-[20px] bg-transparent w-full text-white font-normal px-3 sm:px-4"
                            onChange={(e) => setSearchItem(e.target.value)}
                        />
                    </div>

                    <button onClick={sorted} className='sortBTn px-4 py-2 text-sm sm:text-base'>Sort by date</button>

                    <button
                        onClick={toogleColumn}
                        className='hidden sm:flex items-center border px-4 sm:px-6 py-2 rounded-xl border-[#17c3b2] text-sm sm:text-base'
                    >
                        <span className='pr-3 sm:pr-6'>Change layout</span>
                        {column2 ? <TfiLayoutColumn3 size={24} sm:size={32} /> : <TfiLayoutColumn2 size={24} sm:size={32} />}
                    </button>
                </div>
            </div>

            <div className={`container mx-auto grid grid-cols-1 sm:grid-cols-2 ${column2 ? "lg:grid-cols-2" : 'lg:grid-cols-3'} gap-6 sm:gap-10`}>
                {filterdItem.map(data => (
                    <Food food={data} key={data._id}></Food>
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
