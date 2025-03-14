import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../components/Food';
import { TfiLayoutColumn3, TfiLayoutColumn2 } from 'react-icons/tfi';

const AvailableFoods = () => {
    const loaderData = useLoaderData()
    const [allFoods, setAllFoods] = useState(loaderData)
    const [searchItem, setSearchItem] = useState('')
    const [column2, setcolumn2] = useState(false)

    const filterdItem = allFoods?.filter(food => food.FoodName.toLowerCase().includes(searchItem.toLowerCase()))

    const sorted = () => {
        const sorted = [...allFoods].sort((a, b) => new Date(a.ExpiredDateTime) - new Date(b.ExpiredDateTime));
        setAllFoods(sorted);
    }

    const toogleColumn = () => {
        setcolumn2(!column2)
    }
    return (
        <div className='mb-12'>
            <div className='container my-10 mx-auto flex justify-between items-center'>
                <p className='text-3xl font-semibold'>Available food</p>

                <div className='flex gap-5'>
                    <div className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-[#17c3b2] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-200">
                        <div className="flex items-center justify-center fill-white">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={22} height={22}>
                                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
                            </svg>
                        </div>
                        <input type="text" className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4" onChange={(e) => setSearchItem(e.target.value)} />
                    </div>
                    <button onClick={sorted} className='sortBTn'>Sort by date</button>
                    <button onClick={toogleColumn} className='hidden lg:flex items-center border px-6 rounded-xl border-[#17c3b2]'> <span className='text-2xl pr-6'>Change layout</span> {column2 ? <TfiLayoutColumn3 size={32} /> : <TfiLayoutColumn2 size={32} />}</button>
                </div>

            </div>

            <div className={`container mx-auto grid grid-cols-1 sm:grid-cols-2 ${column2 ? "lg:grid-cols-2" : 'lg:grid-cols-3'} gap-10 px-5`}>
                {
                    filterdItem.map(data => <Food food={data} key={data._id}></Food>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;