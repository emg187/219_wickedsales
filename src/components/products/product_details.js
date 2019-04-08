import React, {Component} from "react";
import axios from "axios";
import ProductCarousel from "./product_detail_images";

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
      
        const {description, name, images} = details;
        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <ProductCarousel images={images}/>
                <p className="center">{description}</p>
            </div>
        );
    }
}

export default ProductDetails;

