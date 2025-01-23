import { useContext, useEffect, useState } from "react";
import { authContext } from "../authprovider/AuthProvider";
import axios from "axios";
import formatDate from "../components/dateformat/formatDate";

const MyFoodRequest = () => {
    const { user } = useContext(authContext)
    const [myFoodRequest, setMyFoodRequest] = useState([])

    useEffect(() => {
        axios.get(`https://back-end-part-a11.vercel.app/food-request?email=${user.email}`, {
            // axios.get(`http://localhost:5500/food-request?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => setMyFoodRequest(res.data))
            .catch()
    }, [user?.email])

    return (
        <>
            <p className='flex flex-col gap-3 mt-8 items-center text-4xl sm:text-5xl font-extrabold text-[#64ae24]'>
                My requested food <span className='border-2 border-[#64ae24] mt-2 w-32'></span></p>
            {
                myFoodRequest.length == 0
                    ? <div className="my-14 text-center">
                        <p className="text-3xl">You haven't requested any food item...</p>
                    </div>
                    :
                    <div className="container mx-auto md:p-10 p-4 overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100 text-sm md:text-base text-center">
                                    <th className="border border-gray-300 p-2 md:p-4">Sl. No.</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Food Name</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Quantity</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Donator</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Expiry Date</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Requested Date</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Food Status</th>
                                    <th className="border border-gray-300 p-2 md:p-4">Pickup Location</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm md:text-base text-center">
                                {myFoodRequest.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 p-2 md:p-4">{index + 1}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.FoodName}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.FoodQuantity}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.Donator.Name}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{formatDate(item.ExpiredDateTime)}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{formatDate(item.RequestDateTime)}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.FoodStatus}</td>
                                        <td className="border border-gray-300 p-2 md:p-4">{item.PickupLocation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

            }
        </>
    );
};

export default MyFoodRequest;