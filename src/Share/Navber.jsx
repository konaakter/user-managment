import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className=' bg-[#495af0d0]  '>
            <div className="navbar text-slate-200  w-10/12 mx-auto py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                              
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1><span className=' text-5xl'>UMS</span> USER MANAGMENTE SYSTEM</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       
                        <li><Link className=' text-xl'>Home</Link></li>
                        <li><Link to='/login' className=' text-xl'>SingUp</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to='/login'> <button  > <FaRegArrowAltCircleRight className=' text-4xl'></FaRegArrowAltCircleRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;
