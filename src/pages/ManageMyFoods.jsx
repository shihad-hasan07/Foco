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
            axios.get(`https://back-end-part-a11.vercel.app/manage-all-foods?email=${user.email}`,{
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
            Manage my food...update,delete... actions
            <div className='container mx-auto border md:p-10'>
                <table className='container mx-auto'>
                    <thead>
                        <tr className='text-center'>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Sl. No.</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Food name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Expiry date</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>FoodStatus</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Pickup Location</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Update</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Delete</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        {
                            manageFoods.map((item, index) => (
                                <tr key={item._id}>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.FoodName}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.FoodQuantity}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{formatDate(item.ExpiredDateTime)}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.FoodStatus}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}>{item.PickupLocation}</td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}> <Link to={`/update-food/${item._id}`}><button> <FaEdit /> </button> </Link></td>
                                    <td style={{ border: '1px solid black', padding: '8px' }}> <button onClick={() => handleFoodDelete(item._id)}> <MdDeleteForever /></button> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMyFoods;