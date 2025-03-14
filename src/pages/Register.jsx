import React, { useContext, useState } from 'react';
import { authContext } from '../authprovider/AuthProvider';
import { toast } from 'react-toastify';
import './Logincss/login.css'
import Lottie from 'lottie-react';
import signupLottie from '../assets/lottie/signup.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const { signup, logOut, addNameImage } = useContext(authContext)
    const [error, setError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const imgUrl = e.target.imgUrl.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value

        if (password.length < 6) {
            setError('Password must be at least 6 character')
            return;
        }

        if (password !== confirmPassword) {
            setError('Password mismatched')
            return;
        }

        if (!/[a-z]/.test(password)) {
            setError("Password must contain atleaset 1 lowercase")
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain atleaset 1 uppercase")
            return;
        }


        signup(email, password)
            .then(res => {
                addNameImage(name, imgUrl)
                toast.success('Registration Successfull');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => toast.error('Registration Failed'))
            // .then(() => logOut())

    }

    return (
        <>
            <div className='container mx-auto pb-10 mt-12 flex items-center justify-center gap-14'>
                <div className='containerr'>
                    <div className="heading">Create your account</div>
                    <form className="form" onSubmit={handleRegister}>
                        <input placeholder="Enter your name" name="name" type="text" className="input" required />
                        <input placeholder="Profile-url" name="imgUrl" type="url" className="input" required />
                        <input placeholder="E-mail" name="email" type="email" className="input" required />
                        <input placeholder="Password" name="password" type="password" className="input" required />
                        <input placeholder="Confirm Password"  name="confirmPassword" type="password" className="input" required />
                        
                        <div className='text-sm pl-2 mt-2 text-red-600'>{error}</div>

                        <button type="submit" className="login-button" >Sign up</button>

                        <div className="divider text-lg font-medium text-gray-400 mt-7">Already have an account?</div>
                        <Link to='/login'><button className="hover:scale-[1.01] transition-all w-full border mt-1 border-blue-700 text-blue-700 font-medium py-3 text-xl rounded-xl mb-5">Login</button></Link>
                    </form>
                </div>

                <div className='hidden lg:block w-[550px]'>
                    <Lottie animationData={signupLottie}></Lottie>
                </div>
            </div>
        </>
    );
};

export default Register;