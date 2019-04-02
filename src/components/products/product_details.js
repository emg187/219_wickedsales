import React, {Component} from "react";

class ProductDetails extends Component {
    componentDidMount(){
        const {params} = this.props.match;
        console.log("Fetch product details with id:", params.product_id);
        //call server to get product details
    }

    render(){

        return (
            <div className="product-details">
                <h1 className="center">[Product Name] Details</h1>
            </div>
        );
    }
}

export default ProductDetails;

