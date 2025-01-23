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
            .catch(err => console.log(err))
    }, [user?.email])

    return (
        <div className='container mx-auto p-10'>
            <table className=''>

                <thead>
                    <tr className='text-center'>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Sl. No.</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Food name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Expiry date</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Requested date</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>FoodStatus</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Pickup Location</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    {
                        myFoodRequest.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.FoodName}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.FoodQuantity}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{formatDate(item.ExpiredDateTime)}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{formatDate(item.RequestDateTime)}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.FoodStatus}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{item.PickupLocation}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyFoodRequest;