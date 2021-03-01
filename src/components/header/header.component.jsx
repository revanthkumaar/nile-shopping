import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg' //getting logo file
import CartIcon from '../cart-icon/cart-icon.component'
import {connect} from 'react-redux';
//functional component (as there is no data/state that is to be changed)
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


const Header = ({currentUser, hidden}) => (
    <div className = "header" >
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP </Link>  
            <Link className="option" to="/shop">CONTACT </Link> 
            {
                currentUser ? (
                    <div className="option">SIGN OUT</div>
                ) : (
                    <Link className="option" to='/signin'>SIGN IN</Link>
                )
            }
        <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
        
    </div>
    
)


const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
});


export default connect(mapStateToProps)(Header);

