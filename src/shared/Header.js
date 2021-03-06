import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><NavLink className='rounded-lg' to="/">Home</NavLink></li>
        {/* <li><NavLink className='rounded-lg' to="/services">Services</NavLink></li>
        <li><NavLink className='rounded-lg' to="/about">About</NavLink></li> */}
        <li><NavLink className='rounded-lg' to="/blogs">Blogs</NavLink></li>
        <li><NavLink className='rounded-lg' to="/reviews">Reviews</NavLink></li>
        <li><NavLink className='rounded-lg' to="/myportfolio">My Portfolio</NavLink></li>
        {/* <li><NavLink className='rounded-lg' to="/login">Login</NavLink></li> */}
        <li class="dropdown dropdown-hover dropdown-end">
            <label tabIndex="0" class="btn btn-primary btn-outline m-1 rounded-lg">Book Now</label>
            <ul tabIndex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </li>

        {
            user && <li><NavLink className='rounded-lg' to="/dashboard">Dashboard</NavLink></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link className='rounded-lg' to="/login">Login</Link>}</li>


    </>
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-base-100 px-20 sticky top-0 z-50">
                    <div class="flex-1 px-2 mx-2 text-2xl">Tools Manufacturer</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">

                            {menuItems}
                        </ul>
                    </div>
                </div>

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    {menuItems}

                </ul>

            </div>
        </div>
    );
};

export default Header;