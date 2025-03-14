import React, { useContext, useState } from "react";
import { authContext } from "../authprovider/AuthProvider";
import { toast } from "react-toastify";
import './addFoodcss/addfood.css'
import { useNavigate } from "react-router-dom";

const AddFood = () => {
    const { user } = useContext(authContext)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        FoodName: "",
        FoodImage: "",
        FoodQuantity: "",
        PickupLocation: "",
        ExpiredDateTime: "",
        AdditionalNotes: "",
        Donator: {
            Name: user?.displayName || "",
            Email: user?.email || "",
            Image: user?.photoURL || "",
        },
        FoodStatus: "available",
    });

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData((prev) => ({
            ...prev,
            [name]: value,
            // in here [name] is a bracket notation to assign dynamic value....
            //  const dynamicKey = "score"; const obj = {name: "John",[dynamicKey]: 100, };
            // console.log(obj); 
            // Output: { name: "John", score: 100 }
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://back-end-part-a11.vercel.app/add-foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Succesfully added to database")
                    navigate('/available-foods')
                }
            })
    };

    return (
        <div className="relative bg-add-food-bg  bg-no-repeat bg-cover min-h-[780px]">
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <div className="relative z-20 text-white">
                    <p className="text-3xl text-center my-10 font-logoFont">Donate food for charity . . .</p>

                    <div className="container mx-auto text-center">
                        <form onSubmit={handleSubmit}>

                            <div className="mb-6 flex justify-center">
                                <div className="form__group field max-w-64 sm:max-w-80 md:max-w-96">
                                    <input type="text" name="FoodName" placeholder="Food Name" value={formData.FoodName} onChange={handleChange}
                                        className="form__field" required />
                                    <label htmlFor="name" className="form__label">Food Name</label>
                                </div>
                            </div>


                            <div className="mb-6 flex justify-center">
                                <div className="form__group field max-w-64 sm:max-w-80 md:max-w-96">
                                    <input type="url" name="FoodImage" placeholder="Food Image URL" value={formData.FoodImage} onChange={handleChange}
                                        className="form__field" required />
                                    <label htmlFor="name" className="form__label">Food img url</label>
                                </div>
                            </div>

                            <div className="mb-6 flex justify-center">
                                <div className="form__group field max-w-64 sm:max-w-80 md:max-w-96">
                                    <input type="number" name="FoodQuantity" placeholder="Quantity" min="1" value={formData.FoodQuantity} onChange={handleChange}
                                        className="form__field" required />
                                    <label htmlFor="name" className="form__label">Food Quantity</label>
                                </div>
                            </div>

                            <div className="mb-6 flex justify-center">
                                <div className="form__group field max-w-64 sm:max-w-80 md:max-w-96">
                                    <input type="text" name="PickupLocation" placeholder="Pickup Location" value={formData.PickupLocation} onChange={handleChange}
                                        className="form__field" required />
                                    <label htmlFor="name" className="form__label">Pickup Location</label>
                                </div>
                            </div>


                            <div className="mb-6 flex justify-center">
                                <div className="form__group field max-w-64 sm:max-w-80 md:max-w-96">
                                    <input type="datetime-local" name="ExpiredDateTime" value={formData.ExpiredDateTime} onChange={handleChange}
                                        // min={new Date().toISOString().slice(0, 16)}
                                        className="form__field" required />
                                    <label htmlFor="name" className="form__label">Expire Date-Time</label>
                                </div>
                            </div>

                            <div className="mb-6 flex justify-center">
                                <div className="form__group field max-w-64 sm:max-w-80 md:max-w-96">
                                    <input name="AdditionalNotes" placeholder="Additional Notes" value={formData.AdditionalNotes} onChange={handleChange}
                                        className="form__field" required />
                                    <label htmlFor="name" className="form__label">Additional Info</label>
                                </div>
                            </div>

                            <button type="submit" className="px-9 py-3 rounded bg-blue-700 text-white">Add Food</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;
