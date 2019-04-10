import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Cart extends Component {
    getCartData = async ()=>{
        //const response = axios.get("/api/getcartitems")
    }

    render(){
        return (
            <div>
                <h1 className="center">Shopping Cart</h1>

                <Link to="/products">Continue Shopping</Link>
            </div>
        );
    }
}


export default Cart;

