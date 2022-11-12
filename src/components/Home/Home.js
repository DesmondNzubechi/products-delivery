import React from "react";
import "./Home.css";
import  delivered  from '../images/deliveryguy.webp';
import { HiLocationMarker } from 'react-icons/hi';


const Home = () => {
    const deliveryGuy = 'Delivered Product';
    return (
        <React.Fragment>
        <div className="homy">
            <div className="descript">
            <h1 className="heading">Super fast Delivery Service</h1>
            <p className="firstParagraph">We have faster delivery in Your town</p>
            <p className="paragraph">We are the most reliable and fastest
                 delivery Service all over the town.</p>
                <form className="formSearch">
                    <HiLocationMarker className="logos" />
                    <input type='text' placeholder="Type Your Location" required />
                    <button type="submit" >Search</button>
                </form>
            </div>
            <div className="imgDiv">
                <img src={delivered} alt={deliveryGuy} /> 
            </div>
        </div>
        </React.Fragment>
    )
};

export default Home;