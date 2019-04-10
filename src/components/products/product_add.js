import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ProductAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            qty: 1
        };
        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    incrementQty(){
        this.setState({
            qty: this.state.qty+1
        });
    }

    decrementQty(){
        if (this.state.qty>1){
            this.setState({
                qty: this.state.qty-1
            });
        }
    }

    addToCart(){
        axios.get(`/api/addcartitem.php?product_id=${this.props.productId}&quantity=${this.state.qty}`).then(res=>{
            console.log("add to cart response:", res);

            this.props.history.push("/cart");
        });
    }

    render(){
        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button className="btn btn-small btn-floating purple">
                        <i onClick={this.decrementQty} className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{this.state.qty}</span>
                    <button className="btn btn-small btn-floating purple">
                        <i onClick={this.incrementQty} className="material-icons">add</i>
                    </button>
                </span>
                <button className="btn">
                    <i onClick={this.addToCart} className="material-icons">add_shopping_cart</i>
                </button>
            </div>
        );
    }
}

export default withRouter(ProductAdd);