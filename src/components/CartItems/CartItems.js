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
    overflowY: 'hidden',
    zIndex: '1500',

}}>
   
    <div style={{
        padding: '10px',
        background: ' white',
        borderRadius: '10px',
        position: 'relative',
        margin: '50px 10px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        maxWidth: '800px',
       

    }}>
       <div style={{
        
       textAlign: 'center',
      
       }}>
        <h1 style={{
           padding: '10px',
           fontWeight: '700',
           textAlign: 'center',
          borderBottom: '2px solid gray',
         fontSize: '20px',
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
                <li className="total" style={{
                    listStyle: 'none',
                    fontSize: '20px',
                    fontWeight: '600',
                }}>Total Price</li>
                <li style={{
                    listStyle: 'none',
                    fontSize: '20px',
                    fontWeight: '900',
                }}><span style={{
                    color: 'rgb(255, 0, 98)',
                    fontWeight: '900',
                }}>???</span><span>2000</span></li>
            </ul>
            <div style={{
                  float: "right",
            }}>
            
            <button className="proceed">Proceed To Checkout</button>
            </div>
            
        </div>
    </div>
</div>
    )
};

export default Cart;