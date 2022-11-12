import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { HiXMark } from "react-icons/hi2";
import './CartItems.css';

const Cart = (props) => {
    return (
<div  style={{
    position: 'fixed',
    top: '0',
    left: '0',
    background: "rgba(0, 0, 0, .5)",
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    transition: '1s',
}}>
   
    <div style={{
        padding: '20px',
        background: ' white',
        borderRadius: '10px',
        position: 'relative',
        margin: '100px 50px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
        maxHeight: '60vh',
        maxWidth: '800px',
       

    }}>
       <div style={{
        
       textAlign: 'center',
      
       }}>
        <h1 style={{
           padding: '10px',
           fontWeight: '500',
           textAlign: 'center',
          borderBottom: '2px solid gray',
        }}>Product In The Cart</h1>
         <h1 >< HiXMark className="closeIc" onClick={props.close}/></h1>
        </div> 

        <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
          width: '100%',
           borderTop: '2px solid gray',
           display: 'block',
           justifyContent: 'center',
        }}>
            <ul style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>
                <li style={{
                    listStyle: 'none',
                    fontSize: '30px',
                    fontWeight: '600',
                }}>Total Price</li>
                <li style={{
                    listStyle: 'none',
                    fontSize: '30px',
                    fontWeight: '900',
                }}><span style={{
                    color: 'rgb(255, 0, 98)',
                    fontWeight: '900',
                }}>₦</span><span>2000</span></li>
            </ul>
            <div style={{
                  float: "right",
            }}>
                <button className="close" onClick={props.close}>Close</button>
            <button className="proceed">Proceed To Checkout</button>
            </div>
            
        </div>
    </div>
</div>
    )
};

export default Cart;