import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authContext } from '../authprovider/AuthProvider'
import { toast } from 'react-toastify';
import { IoLogoGithub } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { googleLogin, githubLogin, user, login } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()

    const doGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast.success('Succesfully login')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error('Login failed')
            })
    }

    const doGithubLogin = () => {
        githubLogin()
            .then(res => {
                toast.success('succes')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => toast('Github authentication failed'))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
    }

    return (
        <div className='text-center'>
            <p className='text-4xl'>Login page</p>
            <form onSubmit={handleLogin}>
                <div className='container mx-auto px-28 mt-12'>
                    <div className='shadow-md shadow-blue-300 rounded-xl'>
                        <input type="email" name="email" placeholder='Email'
                            className='w-full h-12 rounded-3xl outline-none p-3' />
                    </div>
                    <div className='shadow-md shadow-blue-300 rounded-xl mt-10'>
                        <input type="password" name="password" placeholder='Password'
                            className='w-full h-12  rounded-3xl outline-none p-3' />
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-600 w-full h-12 mt-10 rounded-xl text-white text-2xl'>Submit</button>
                    </div>
                </div>
            </form>
            <Link to='/register'><p className='text-red-700 mt-4'>Create an account? </p></Link>
            <div className='flex gap-14 mt-8 justify-center'>
                <button onClick={doGoogleLogin} className='flex items-center gap-1 text-3xl px-7 py-2 border rounded-md'><FcGoogle />Google</button>
                <button onClick={doGithubLogin} className='flex items-center gap-1 text-3xl px-7 py-2 border rounded-md'><IoLogoGithub />Github</button>
            </div>
        </div>
    );
};

export default Login;