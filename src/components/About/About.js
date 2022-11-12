import React from "react";
import { Fragment } from "react";
import laptop from '../images/laptop.jpg';
import './About.css';


const About = () => {
    return (
    <Fragment>
        <div className="about">
          
                <div className="abtDescription">
                    <div className="abt">
                    <h1>ABOUT US</h1>
                <h3>Who Are We??</h3>
                       <p>We are <span>Delivery</span> we buy and and deliver different kind of
                         products to our customers to the comfort of their home. We sell
                          products such as <span>Food, Phone, Television, Car</span> and many more. 
                          We make your life easier. Do you need to get an item across Nigeria? 
                          Just Delivery! Hungry for food? Just Delivery!</p> 
                    </div>
                    <div className="abtImg">
                    <img src={laptop}  />
                    </div>
                       
                    
                </div>
      
        </div>
    </Fragment>
    )
}

export default About;