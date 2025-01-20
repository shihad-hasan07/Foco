import React, { useContext } from 'react';
import { authContext } from '../authprovider/AuthProvider';
import { toast } from 'react-toastify';
import './Logincss/login.css'
import Lottie from 'lottie-react';
import signupLottie from '../assets/lottie/signup.json'
import { Link } from 'react-router-dom';

const Register = () => {
    const { signup, logOut, addNameImage } = useContext(authContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const imgUrl = e.target.imgUrl.value
        const email = e.target.email.value
        const password = e.target.password.value
        // const confirmPassword = e.target.confirmPassword.value

        signup(email, password)
            .then(res => {
                addNameImage(name, imgUrl)
                toast.success('Registration Successfull')
            })
            .catch(err => toast.error('Registration Failed'))
            .then(() => logOut())

    }

    return (
        <>
            {/* <div>
                <p className='text-4xl mb-10'>  hi i am register page......</p>
                <form onSubmit={handleRegister}>
                    <div className='container mx-auto px-28'>

                        <div className='shadow-md shadow-blue-300 rounded-xl'>
                            <input type="text" name="name" placeholder='Enter your name'
                                className='w-full h-12 rounded-3xl outline-none p-3' />
                        </div>

                        <div className='shadow-md shadow-blue-300 rounded-xl mt-10'>
                            <input type="url" name="imgUrl" placeholder='Profile url'
                                className='w-full h-12 rounded-3xl outline-none p-3' />
                        </div>

                        <div className='shadow-md shadow-blue-300 rounded-xl mt-10'>
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
            </div> */}

            <div className='container mx-auto mt-12 flex items-center justify-center gap-14'>
                <div className='containerr'>
                    <div className="heading">Create your account</div>
                    <form className="form" onSubmit={handleRegister}>
                        <input placeholder="Enter your name" name="name" type="text" className="input" required />
                        <input placeholder="Profile-url" name="imgUrl" type="url" className="input" required />
                        <input placeholder="E-mail" name="email" type="email" className="input" required />
                        <input placeholder="Password" id="password" name="password" type="password" className="input" required />
                        {/* <input placeholder="Password" id="password" name="confirmPassword" type="password" className="input" required /> */}
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