import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='my-container header flex items-center justify-between'>
            <Link to='/'>
                <h2 className='logo'>T-shirt</h2>
            </Link>
            <ul className='route-parent'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'activeRoute' : ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='orders'
                        className={({ isActive }) => isActive ? 'activeRoute' : ''}>
                        orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='contextapi'
                        className={({ isActive }) => isActive ? 'activeRoute' : ''}>
                        ContextAPI
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
};

export default Header;