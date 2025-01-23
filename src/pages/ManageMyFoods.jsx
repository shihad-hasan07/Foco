import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../authprovider/AuthProvider';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import formatDate from '../components/dateformat/formatDate'

const ManageMyFoods = () => {
    const { user } = useContext(authContext)

    const [manageFoods, setManageFoods] = useState([])

    useEffect(() => {
        if (user.email) {
            axios.get(`https://back-end-part-a11.vercel.app/manage-all-foods?email=${user.email}`, {
                // axios.get(`http://localhost:5500/manage-all-foods?email=${user.email}`, {
                withCredentials: true
            })
                .then(res => setManageFoods(res.data))
                .catch(err => console.log(err))
        }
    }, [user?.email])

    const handleFoodDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://back-end-part-a11.vercel.app/food/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (manageFoods.length > 0) {
                            const remainingFoods = manageFoods.filter(food => food._id !== id)
                            setManageFoods(remainingFoods)
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Food has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    return (
        <div>
            <p className='flex flex-col gap-3 mt-8 items-center text-4xl sm:text-5xl font-extrabold text-[#64ae24]'>
                Manage food <span className='border-2 border-[#64ae24] mt-2 w-32'></span></p>

            {
                manageFoods.length == 0
                    ? <div className="my-14 text-center">
                        <p className="text-3xl">You haven't added any food item yet...</p>
                    </div>
                    :
                    <div className="container mx-auto  md:p-10 p-4 overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-sm md:text-base">
                                    <th className="border border-gray-300 p-2 md:p-4">Sl. No.</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Food Name</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Quantity</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Expiry Date</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Food Status</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Pickup Location</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Update</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm md:text-base text-center">
                                {manageFoods.map((item, index) => (
                                    <tr key={item._id} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 p-2 md:p-4">{index + 1}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.FoodName}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.FoodQuantity}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{formatDate(item.ExpiredDateTime)}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.FoodStatus}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.PickupLocation}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">
                                            <Link to={`/update-food/${item._id}`}>
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="border border-gray-300 p-2 md:p-4">
                                            <button
                                                onClick={() => handleFoodDelete(item._id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
};

export default ManageMyFoods;