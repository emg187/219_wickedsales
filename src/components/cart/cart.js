import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {formatMoney} from "../../helpers";
import "./cart.scss";

class Cart extends Component {
    state = {
        items: [],
        meta: {}
    };

    componentDidMount(){
        this.getCartData();
    }

    async getCartData(){
        const response = await axios.get("/api/getcartitems.php");

        if (response.data.success){
            this.setState({
                items: response.data.cartItems,
                meta: response.data.cartMetaData
            });
        } else {
            console.log("Cart data failed to load");
        }
    }

    render(){
        const {items, meta} = this.state;
        let totalItems = 0;

        const cartItems = items.map((item)=>{
            totalItems += item.quantity;
            const itemTotalPrice = formatMoney(item.quantity*item.price);

            return (
                <tr key={item.id}>
                    <td>
                        <img src={`/dist/${item.image}`}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{formatMoney(item.price)}</td>
                    <td>{item.quantity}</td>
                    <td>{itemTotalPrice}</td>
                </tr>
            );
        });

        return (
            <div className="cart">
                <h1 className="center">Shopping Cart</h1>

                <Link to="/products">Continue Shopping</Link>
                
                <div className="right-align total-items">Total Items in Cart: {totalItems}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price Each</th>
                            <th>Quantity</th>
                            <th>Item total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td colSpan="5" className="total-price">
                                Total: {formatMoney(meta.total)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Cart;

