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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/available-foods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5500/all-foods')
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
                loader:()=>fetch('http://localhost:5500/all-foods')
            },
            {
                path: '/my-food-request',
                element: <PrivateRoute>
                    <MyFoodRequest></MyFoodRequest></PrivateRoute>,
                loader:()=>fetch('http://localhost:5500/food-request')
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
                path:"/food/:id",
                element:<PrivateRoute>
                    <FoodDetails></FoodDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5500/food/${params.id}`)
            },
            {
                path:`/update-food/:id`,
                element:<PrivateRoute>
                    <UpdateFood></UpdateFood></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5500/food/${params.id}`)
            }
        ]
    }
])

export default router