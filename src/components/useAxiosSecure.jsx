import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { authContext } from '../authprovider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5500',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useContext(authContext)
    const navigate=useNavigate()


    // useEffect(() => {
    //     axiosInstance.interceptors.response.use(response => {
    //         return response
    //     }, error => {

    //         if (error.status === 401 || error.status === 403) {
    //             logOut()
    //             .then(()=>{
    //                 console.log('user log out')
    //                 // navigate('/login')
    //             })
    //             .catch(errr=>console.log('something wrong happen'))
    //         }
    //         return Promise.reject(error)
    //     })
    // }, [])

    return axiosInstance
};

export default useAxiosSecure;