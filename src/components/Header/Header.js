import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about1'>AboutFirst</Link></li>
                <li><Link to='/about2'>AboutSecond</Link></li>
            </ul>
        </nav>
    </header>);
export default Header;