import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RequestedFood from "../components/RequestedFood";
import { authContext } from "../authprovider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../components/useAxiosSecure";

const MyFoodRequest = () => {
    const { user } = useContext(authContext)
    const axiosSecure = useAxiosSecure()

    const [myFoodRequest, setMyFoodRequest] = useState([])

    useEffect(() => {
        // axios.get(`http://localhost:5500/food-request?email=${user.email}`, {
        //     withCredentials: true
        // })
        //     .then(res => setMyFoodRequest(res.data))

        axiosSecure.get(`/food-request?email=${user.email}`)
            .then(res => setMyFoodRequest(res.data))
            
    }, [user.email])

    return (
        <div>
            {
                myFoodRequest?.map((request, index) => <RequestedFood key={request._id} data={request} index={index}></RequestedFood>)
            }
        </div>
    );
};

export default MyFoodRequest;