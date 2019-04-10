import React, {Component} from "react";
import axios from "axios";
import ProductCarousel from "./product_detail_images";
import {formatMoney} from "../../helpers/index";
import MiscDetails from "./misc_details";
import ProductAdd from "./product_add";

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
        const {params} = this.props.match;

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
                        <ProductAdd productId={params.product_id}/>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;

