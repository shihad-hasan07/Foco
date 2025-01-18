import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import FoodDetails from "../pages/FoodDetails";
import UpdateFood from "../pages/UpdateFood";
import axios from "axios";
import Errorpage from "../pages/Errorpage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/available-foods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('https://back-end-part-a11.vercel.app/all-foods')
            },
            {
                path: '/add-food',
                element: <PrivateRoute>
                    <AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/manage-my-foods',
                element: <PrivateRoute>
                    <ManageMyFoods></ManageMyFoods></PrivateRoute>,
            },
            {
                path: '/my-food-request',
                element: <PrivateRoute>
                    <MyFoodRequest></MyFoodRequest></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/food/:id",
                element: <PrivateRoute>
                    <FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://back-end-part-a11.vercel.app/food/${params.id}`)
            },
            {
                path: `/update-food/:id`,
                element: <PrivateRoute>
                    <UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://back-end-part-a11.vercel.app/food/${params.id}`)
            }
        ]
    }
])

export default router