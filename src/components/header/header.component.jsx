import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg' //getting logo file


import {connect} from 'react-redux';
//functional component (as there is no data/state that is to be changed)

const Header = () => (
    <div className = "header" >
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP </Link>  
            <Link className="option" to="/shop">CONTACT </Link> 
        </div>
    </div>
    
)

export default Header;

