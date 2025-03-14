import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authContext } from '../authprovider/AuthProvider'
import { toast } from 'react-toastify';
import { IoLogoGithub } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Logincss/login.css'
import Lottie from 'lottie-react';
import signupLottie from '../assets/lottie/login.json'

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

        if (password.length < 6) {
            setError('Password must be at least 6 character')
            return;
        }


        login(email, password)
        .then(res=>{
            toast.success('Succesfully login')
            navigate(location?.state ? location.state : '/')
        })
        .catch(err=>{
            toast.error('user not found')
            // e.target.reset();
        })
    }

    return (
        <>
            <div className='container mx-auto pb-10 mt-12 flex items-center justify-center gap-14'>
                {/* lottie animation */}
                <div className='hidden lg:block w-[550px]'>
                    <Lottie animationData={signupLottie}></Lottie>
                </div>

                {/* login page */}
                <div className="containerr">
                    <div className="heading">LogIn</div>
                    <form className="form" onSubmit={handleLogin}>
                        <input placeholder="E-mail" id="email" name="email" type="email" className="input" required />
                        <input placeholder="Password" id="password" name="password" type="password" className="input" required />
                        <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
                        <button type="submit" className="login-button" >login</button>
                    </form>
                    <div className='social-accounts'>
                        <button onClick={doGoogleLogin} className='hover:scale-[1.01] w-full justify-center transition-all flex items-center gap-1 text-3xl px-7 py-2 border border-blue-700 rounded-[18px]'><FcGoogle />Google</button>
                        {/* <button onClick={doGithubLogin} className='hover:scale-105 transition-all flex items-center gap-1 text-3xl px-8 py-2 border rounded-md'><IoLogoGithub />Github</button> */}
                    </div>
                    <div className="divider text-lg font-medium  text-gray-400 mt-5">Don't have an account?</div>
                    <Link to='/register'><button className="hover:scale-[1.01] transition-all w-full border mt-1 border-blue-700 text-blue-700 font-medium py-3 text-xl rounded-xl mb-5">Create Your Account</button></Link>

                </div>


            </div>
        </>
    );
};

export default Login;