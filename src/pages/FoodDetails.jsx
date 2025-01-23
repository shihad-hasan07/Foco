import React, { useContext, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../authprovider/AuthProvider';

const FoodDetails = () => {
    const {user}=useContext(authContext)
    const navigate=useNavigate()
    const data = useLoaderData()
    const currentTime=new Date()

    const { _id, FoodName, FoodImage, FoodQuantity, PickupLocation, ExpiredDateTime, AdditionalNotes, Donator, FoodStatus } = data

    const [foodRequest, setFoodRequest] = useState({
        FoodName: FoodName,
        FoodImage: FoodImage,
        FoodQuantity: FoodQuantity,
        PickupLocation: PickupLocation,
        ExpiredDateTime: ExpiredDateTime,
        RequestDateTime:currentTime.toLocaleString(),
        AdditionalNotes: AdditionalNotes,
        Donator: {
            Name: Donator.Name,
            Email: Donator.Email,
            Image: Donator.Image,
        },
        RequestedUser:user.email,
        FoodStatus: "requested",
    })

    // console.log(currentTime.toLocaleString());

    // add the food in my food request and also delete form available foods
    const addtoFoodReqest = (id) => {

        // 1. onclick request=>... open modal
        document.getElementById('my_modal_1').showModal()

        // 2. delete form available
        fetch(`https://back-end-part-a11.vercel.app/food/${id}`, {
            method: 'DELETE'
        })
    }

    // 3. handle the changes
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFoodRequest((prev) => ({ ...prev, [name]: value }));
    }

    // 4. onclick request form modal=>...  add to myfoodrequest
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://back-end-part-a11.vercel.app/food-request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodRequest)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Succesfully added to my food request")
                    navigate('/available-foods')
                }
            })

        // 5. close modal
        document.getElementById('my_modal_1').close()
    };


    return (
        <div className='container mx-auto px-5 md:px-20 lg:px-36 mt-16'>
            <div className=''>
                <div>
                    <img src={FoodImage} alt="img-not-found"
                        className='w-full image-with-alt rounded-t-xl h-[450px] object-cover' />
                </div>

                <div className='flex gap-10 justify-between bg-blue-100 rounded-b-xl p-5'>
                    {/* food details */}
                    <div>
                        <p className='font-bold text-3xl'>{FoodName.toUpperCase()}</p>
                        <p className='text-base mt-2 font-medium'>{AdditionalNotes}</p>
                        <p className='text-xl my-3 font-medium'>Pickup location : {PickupLocation}</p>
                        <p className='text-xl my-3 font-medium'>Quantity : {FoodQuantity}</p>
                        <div><span className='px-3 text-sm text-white py-1 rounded-3xl bg-blue-900'>{FoodStatus}</span></div>
                        <button className='primaryBtn mt-5' onClick={() => addtoFoodReqest(_id)}>Request</button>
                    </div>

                    {/* donator details */}
                    <div className='pr-10 min-w-80'>
                        <p className='font-semibold'>Donator :{Donator?.Name}</p>
                        <p className='font-semibold'>Email :{Donator?.Email}</p>
                    </div>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_1" className="modal ">
                        <div className="modal-box bg-add-food-bg bg-no-repeat bg-cover">
                            <form method="dialog" onSubmit={handleSubmit}>
                                <div className="container mx-auto text-center text-gray-500">
                                    <div className="mb-6">
                                        <input type="text" name="FoodName" placeholder="Food Name" value={foodRequest.FoodName} disabled
                                            className="py-3 border px-9 rounded bg-black" />
                                    </div>

                                    <div className="mb-6">
                                        <input type="url" name="FoodImage" placeholder="Food Image URL" value={foodRequest.FoodImage} disabled
                                            className="py-3 border px-9 rounded bg-black" />
                                    </div>

                                    <div className="mb-6">
                                        <input type="number" name="FoodQuantity" placeholder="Quantity" value={foodRequest.FoodQuantity} disabled
                                            className="py-3 border px-9 rounded bg-black" />
                                    </div>

                                    <div className="mb-6">
                                        <input type="text" name="PickupLocation" placeholder="Pickup Location" value={foodRequest.PickupLocation} disabled
                                            className="py-3 border px-9 rounded bg-black" />
                                    </div>


                                    <div className="mb-6">
                                        <input type="datetime-local" name="ExpiredDateTime" value={foodRequest.ExpiredDateTime} disabled
                                            className="py-3 border px-[19px] rounded bg-black" />
                                    </div>

                                    {/* demo requsted tiem */}
                                    <div className="mb-6">
                                        <input type="" name="ExpiredDateTime" value={foodRequest.RequestDateTime} disabled
                                            className="py-3 border px-[19px] rounded bg-black" />
                                    </div>

                                    <div className="mb-6 text-white">
                                        <input name="AdditionalNotes" placeholder="Additional Notes" value={foodRequest.AdditionalNotes} onChange={handleChange}
                                            className="py-3 border px-9 rounded bg-black" />
                                    </div>

                                    <button type="submit" className="px-9 py-3 rounded bg-blue-700 text-white">Request</button>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;