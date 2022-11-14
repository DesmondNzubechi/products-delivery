import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';
import Cart from "../CartItems/CartItems";
import './Header.css';
import { useState, Fragment} from "react";

const Header = () => {

    const [closeView, setCloseView] = useState(false);
    const [openView, setOpenView] = useState(true);
    const [viewMenu, setViewMenu] = useState(-1000);
    const [viewCart, setViewCart] = useState(false);
    
    //Showing Cart
    const showCart = () => {
        setViewCart(true);
    }
    //closing cart
    const closeCart = () => {
        setViewCart(false);
    }
    const showClose = () => {
        setCloseView(true);
        setOpenView(false);
        setViewMenu(0);
    };
    const showOpen = () => {
       setCloseView(false);
       setOpenView(true);
       setViewMenu(-1000)
    }
    return (
        <Fragment>
        <header>
       
           <div> <h1 className="logo"><span>Del</span>ivery</h1></div>
            <div> 
            <ul className="links" style={{left:viewMenu}}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </div>
<div>
<ul className="cartGet">
            <li className="addToCart" onClick={showCart}><AiOutlineShoppingCart className="cart"  />  <span className="num">0</span></li>
           
        </ul>
</div>
        <div className="menu">
        { openView && <AiOutlineMenu className="open" onClick={showClose} />}
          { closeView &&  <HiXMark className="close" onClick={showOpen}/>}
        </div>
        </header>

        {viewCart && <Cart  close={closeCart} />}
        </Fragment>
    )
}

export default Header;