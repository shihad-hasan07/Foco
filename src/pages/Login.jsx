import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { authContext } from '../authprovider/AuthProvider'
import { toast } from 'react-toastify';
import { IoLogoGithub } from 'react-icons/io5';

const Login = () => {
    const { googleLogin,githubLogin,user } = useContext(authContext)
    

    const doGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast('succesfully logsin')
            })
            .catch(error => {
                toast('Login failed')
            })
    }

    const doGithubLogin=()=>{
        githubLogin()
        .then(res=>{
            toast('succes')
        })
        .catch(err=>toast('Github authentication failed'))
    }

    return (
        <div>
            <p className='text-4xl'>Login page</p>
            <button onClick={doGoogleLogin} className='flex items-center gap-1 text-3xl px-7 py-2 border rounded-md'><FcGoogle />Google</button>
            <button onClick={doGithubLogin} className='flex items-center gap-1 text-3xl px-7 py-2 border rounded-md'><IoLogoGithub />Github</button>
        </div>
    );
};

export default Login;