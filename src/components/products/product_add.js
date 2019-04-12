import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import Modal from "../modal";
import {formatMoney} from "../../helpers"; 

class ProductAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            qty: 1, 
            modalOpen: false, 
            totalPrice: 0, 
            cartQty: 0
        };
        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.goToCart = this.goToCart.bind(this);
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

            const {cartCount, cartTotal} = res.data;
            this.props.updateCart(res.data.cartCount); 

            this.setState({
                modalOpen: true,
                cartQty: cartCount,
                totalPrice: cartTotal
            });
        });
    }

    closeModal(){
        this.setState({
            modalOpen: false,
            qty: 1
        });
    }

    goToCart(){
        this.props.history.push("/cart");
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
                <Modal isOpen={this.state.modalOpen} 
                        defaultAction={this.closeModal}
                        defaultActionText="Continue Shopping"
                        secondaryAction={this.goToCart}
                        secondaryActionText="View Cart">   
                    <h1 className="center">{this.state.qty} Item{this.state.qty>1&&"s"} Added to Cart</h1>

                    <div className="row">
                        <div className="col s6">Cart Total Items:</div>
                        <div className="col s6 left-align">{this.state.cartQty}</div>
                    </div>
                    <div className="row">
                        <div className="col s6">Cart Total Price:</div>
                        <div className="col s6 left-align">{formatMoney(this.state.totalPrice)}</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(ProductAdd);