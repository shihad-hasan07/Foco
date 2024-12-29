import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import Register from "../pages/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/available-foods',
                element:<AvailableFoods></AvailableFoods>
            },
            {
                path:'/add-food',
                element:<AddFood></AddFood>
            },
            {
                path:'/manage-my-foods',
                element:<ManageMyFoods></ManageMyFoods>
            },
            {
                path:'/my-food-request',
                element:<MyFoodRequest></MyFoodRequest>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router