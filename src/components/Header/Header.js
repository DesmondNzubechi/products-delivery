import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';
import './Header.css';
import { useState } from "react";

const Header = () => {

    const [closeView, setCloseView] = useState(false);
    const [openView, setOpenView] = useState(true);
    const [viewMenu, setViewMenu] = useState(-1000);
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
        <header>
            <h1 className="logo"><span>Del</span>ivery</h1>
            <ul className="links" style={{left:viewMenu}}>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Discover</a></li>
                <li><a href="">Contact</a></li>
            </ul>

        <ul className="cartGet">
            <li className="addToCart"><AiOutlineShoppingCart className="cart" /></li>
            <li className="get"><a href=""> Get The App</a></li>
        </ul>

        <div className="menu">
        { openView && <AiOutlineMenu className="open" onClick={showClose} />}
          { closeView &&  <HiXMark className="close" onClick={showOpen}/>}
        </div>
        </header>
    )
}

export default Header;