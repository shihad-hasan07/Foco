import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RequestedFood from "../components/RequestedFood";
import { authContext } from "../authprovider/AuthProvider";

const MyFoodRequest = () => {
    const { user } = useContext(authContext)
    const data = useLoaderData()
    const [myFoodRequest, setMyFoodRequest] = useState(
        data.filter(e => e.RequestedUser === user?.email )
    )



    return (
        <div>
            {
                myFoodRequest.map((request, index) => <RequestedFood key={request._id} data={request} index={index}></RequestedFood>)
            }
        </div>
    );
};

export default MyFoodRequest;