import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand><Link to='/'>Home</Link></Navbar.Brand>
            <Navbar.Brand><Link to='/about1'>AboutFirst</Link></Navbar.Brand>
            <Navbar.Brand><Link to='/about2'>AboutSecond</Link></Navbar.Brand>
        </Navbar.Header>
    </Navbar>);
export default Header;