import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../authprovider/AuthProvider';
import { PiCpuThin } from 'react-icons/pi';
import { toast } from 'react-toastify';

const UpdateFood = () => {
    const data = useLoaderData()
    const navigate=useNavigate()
    const [formData, setUpdatedData] = useState(data)

    const handleUpdate = (e) => {
        e.preventDefault()
        const FoodName = e.target.FoodName.value
        const FoodImage = e.target.FoodImage.value
        const FoodQuantity = e.target.FoodQuantity.value
        const PickupLocation = e.target.PickupLocation.value
        const ExpiredDateTime = e.target.ExpiredDateTime.value
        const AdditionalNotes = e.target.AdditionalNotes.value
        const Name = formData.Donator.Name
        const Email = formData.Donator.Email
        const Image = formData.Donator.Image
        const updatedFood = {
            FoodName, FoodImage, FoodQuantity, PickupLocation, ExpiredDateTime,
            AdditionalNotes, Donator: { Name, Email, Image }, FoodStatus: formData.FoodStatus
        }

        fetch(`https://back-end-part-a11.vercel.app/update-food/${formData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('succesfully updated')
                navigate('/manage-my-foods')
            })

    }

    return (
        <div className="relative bg-add-food-bg bg-no-repeat bg-cover min-h-[750px]">
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <div className="relative z-20 text-white">
                    <p className="text-3xl text-center my-10 font-logoFont">Update the food</p>

                    <div className="container mx-auto text-center">
                        <form onSubmit={handleUpdate}>

                            <div className="mb-6">
                                <input type="text" name="FoodName" placeholder="Food Name" defaultValue={formData.FoodName} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input type="url" name="FoodImage" placeholder="Food Image URL" defaultValue={formData.FoodImage} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input type="number" name="FoodQuantity" placeholder="Quantity" min="1"  defaultValue={formData.FoodQuantity} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input type="text" name="PickupLocation" placeholder="Pickup Location" defaultValue={formData.PickupLocation} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>


                            <div className="mb-6">
                                <input type="datetime-local" name="ExpiredDateTime" defaultValue={formData.ExpiredDateTime} required
                                    className="py-3 border px-[19px] rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input name="AdditionalNotes" placeholder="Additional Notes" defaultValue={formData.AdditionalNotes}
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <button type="submit" className="px-9 py-3 rounded bg-blue-700 text-white">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;