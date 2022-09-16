import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <Link to='/' className={classes.nav} >Home </Link>
            <Link to='/show-book' className={classes.nav} >Show Book</Link>
            <Link to='/add-book' className={classes.nav} >Add Book </Link>
        </nav>
    );
};

export default Navbar;