import React from "react";
import food from '../images/foodbg.png';
import phone from '../images/phonebg.png';
import laptop from '../images/laptopbg.png';
import television from '../images/televisionbg.png';
import cloth from '../images/clothbg.png';
import shoe from '../images/shoebg.png';
import './Menu.css';

const Menu = () => {
    return (
        <div className="ourMenu">
            <div className="menuHeady">
            <h1>Our Menu</h1>
            <h4>We sell and deliver the following items</h4>
            </div>
            <div className="ourMenuDisplay">
                <div>
                <div>
                    <img src={phone} alt='Phone' />
                  
                    <h2>Smart Phone</h2>
                   
                </div>
                </div>
               <div>
                <div>
                    <img src={laptop} alt='Laptop' />
                    <h2>Portable Laptop</h2>
                </div>
               </div>
                <div>
                <div>
                    <img src={television} alt='Television' />
                    <h2>Television</h2>
                </div>
                </div>
            </div>
            <div className="ourMenuDisplay">
                <div>
                    <div>
                    <img src={food} alt='food' />
                    <h2>Delicious Food</h2>
                </div>
                </div>
                <div>
                <div>
                    <img src={shoe} alt='Shoe' />
                    <h2>Sneakers</h2>
                </div>
                </div>
                <div>
                <div>
                    <img src={cloth} alt='Clothes' />
                    <h2>Clothes</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;