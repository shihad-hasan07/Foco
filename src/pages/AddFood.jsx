import React, { useContext, useState } from "react";
import { authContext } from "../authprovider/AuthProvider";
import { toast } from "react-toastify";


const AddFood = () => {
    const { user } = useContext(authContext)

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

        console.log(formData);
        fetch('https://back-end-part-a11.vercel.app/add-foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    toast("Succesfully added to database")
                }
            })
    };

    return (
        <div className="relative bg-add-food-bg bg-no-repeat bg-cover min-h-[750px]">
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <div className="relative z-20 text-white">
                    <p className="text-3xl text-center my-10 font-logoFont">Add food to your online shop . . .</p>

                    <div className="container mx-auto text-center">
                        <form onSubmit={handleSubmit}>

                            <div className="mb-6">
                                <input type="text" name="FoodName" placeholder="Food Name" value={formData.FoodName} onChange={handleChange} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input type="url" name="FoodImage" placeholder="Food Image URL" value={formData.FoodImage} onChange={handleChange} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input type="number" name="FoodQuantity" placeholder="Quantity" value={formData.FoodQuantity} onChange={handleChange} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input type="text" name="PickupLocation" placeholder="Pickup Location" value={formData.PickupLocation} onChange={handleChange} required
                                    className="py-3 border px-9 rounded bg-black" />
                            </div>


                            <div className="mb-6">
                                <input type="datetime-local" name="ExpiredDateTime" value={formData.ExpiredDateTime} onChange={handleChange} required
                                    className="py-3 border px-[19px] rounded bg-black" />
                            </div>

                            <div className="mb-6">
                                <input name="AdditionalNotes" placeholder="Additional Notes" value={formData.AdditionalNotes} onChange={handleChange}
                                    className="py-3 border px-9 rounded bg-black" />
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
