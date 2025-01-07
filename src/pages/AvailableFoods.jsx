import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../components/Food';

const AvailableFoods = () => {
    const loaderData = useLoaderData()
    const [allFoods, setAllFoods] = useState(loaderData)

    return (
        <div>
            <p className='text-3xl mb-12'>Available food</p>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5'>
                {
                    allFoods.map(data=><Food food={data} key={data._id}></Food>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;