import React from 'react';
import { Route, Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/home'}>ទំព័រដើម</Link>
                </li>

                <li>
                    <Link to={'/articles'}>គ្រប់គ្រង</Link>
                </li>

                <li>
                    <Link to={'/aboutme'}>អំពីខ្ញុំ</Link>
                </li>

                <li>
                    <Link to={'/login'} className="">ចុះឈ្មោះ</Link>
                </li>
            </ul>
        </nav >
    );
}
