import React, { useContext } from 'react';
import { authContext } from '../authprovider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { signup, logOut, addNameImage } = useContext(authContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const imgUrl = e.target.imgUrl.value

        signup(email, password)
            .then(res => {
                addNameImage(name,imgUrl)
                toast('accoutn created')
            })
            .catch(err => toast.error('Registration Failed'))
            .then(() => logOut())

    }

    return (
        <div>
            <p className='text-4xl mb-10'>  hi i am register page......</p>
            <form onSubmit={handleRegister}>
                <div className='container mx-auto px-28'>

                    {/* name */}
                    <div className='shadow-md shadow-blue-300 rounded-xl'>
                        <input type="text" name="name" placeholder='Enter your name'
                            className='w-full h-12 rounded-3xl outline-none p-3' />
                    </div>

                    {/* img link */}
                    <div className='shadow-md shadow-blue-300 rounded-xl mt-10'>
                        <input type="url" name="imgUrl" placeholder='Profile url'
                            className='w-full h-12 rounded-3xl outline-none p-3' />
                    </div>

                    {/* email */}
                    <div className='shadow-md shadow-blue-300 rounded-xl mt-10'>
                        <input type="email" name="email" placeholder='Email'
                            className='w-full h-12 rounded-3xl outline-none p-3' />
                    </div>

                    {/* password */}
                    <div className='shadow-md shadow-blue-300 rounded-xl mt-10'>
                        <input type="password" name="password" placeholder='Password'
                            className='w-full h-12  rounded-3xl outline-none p-3' />
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-600 w-full h-12 mt-10 rounded-xl text-white text-2xl'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;