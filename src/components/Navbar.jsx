import React, { useContext } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../authprovider/AuthProvider';


const Navbar = () => {
    const { user, logOut, loading } = useContext(authContext)
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <div className='flex items-center'>
                    <div className="dropdown dropdown-bottom">
                        <button className="p-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2">
                            <li className="flex">
                                <button><Link to='/' className="flex items-center">Home</Link></button>
                            </li>
                            <li className="flex">
                                <button><Link to='/available-foods' className="flex items-center">Available Foods</Link></button>
                            </li>
                            <li className="flex">
                                <button> <Link to='/add-food' className="flex items-center">Add Foods</Link></button>
                            </li>
                            <li className="flex">
                                <button><Link to='/manage-my-foods' className="flex items-center">Manage foods</Link></button>
                            </li>
                            <li className="flex">
                                <button><Link to='/my-food-request' className="flex items-center">Food request</Link></button>
                            </li>

                        </ul>
                    </div>
                    <Link to='/' className="flex items-center p-2">
                        <p className='font-logoFont text-5xl font-medium'>Foco</p>
                    </Link>

                </div>

                {/* show >> in large device */}
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to='/' className="flex items-center notActive">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to='/available-foods' className="flex items-center notActive ml-3">Available Foods</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to='/add-food' className="flex items-center notActive ml-3">Add Foods</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to='/manage-my-foods' className="flex items-center notActive ml-3">Manage foods</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to='/my-food-request' className="flex items-center notActive ml-2">My food request</NavLink>
                    </li>
                </ul>

                {
                    user == null ?
                        <div className="items-center flex-shrink-0 flex">
                            <Link to='/register'><button className="hover:bg-slate-300 mr-2 flex items-center gap-1 px-6 py-3 rounded ">
                                <MdOutlinePersonAddAlt1 /> Sign up</button></Link>

                            <Link to='/login'><button className="flex items-center gap-1 px-6 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                                <IoLogInOutline />Log in</button></Link>
                        </div>
                        :
                        <div className="items-center flex-shrink-0 flex group">
                            <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                <img className="w-12 object-cover border h-12 rounded-3xl" src={user?.photoURL} alt="img" />
                            </div>
                            <button onClick={logOut} className="self-center ml-4 px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Log out</button>
                        </div>
                }
            </div>
        </header>
    );
};

export default Navbar;