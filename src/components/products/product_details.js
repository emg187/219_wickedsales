import React, {Component} from "react";
import axios from "axios";
import ProductCarousel from "./product_detail_images";
import {formatMoney} from "../../helpers/index";
import MiscDetails from "./misc_details";

class ProductDetails extends Component {
    state = {
        details: null
    }

    async componentDidMount(){
        const {params} = this.props.match;
        const response = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);

        if (response.data.success){
            this.setState({
                details: response.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }
    }

    render(){
        const {details} = this.state;

        if (!details===null){
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found</h1>
        }
      
        const {description, name, images, price, miscDetails} = details;
        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images}/>
                    <div className="col s12 m4">
                        <div className="right-align product-price">{formatMoney(price)}</div>
                        <div className="right-align add-to-cart">
                            <span className="qty-container">
                                <button className="btn btn-small btn-floating purple">
                                    <i className="material-icons">remove</i>
                                </button>
                                <span className="product-qty">1</span>
                                <button className="btn btn-small btn-floating purple">
                                    <i className="material-icons">add</i>
                                </button>
                            </span>
                            <button className="btn">
                                <i className="material-icons">add_shopping_cart</i>
                            </button>
                        </div>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;

