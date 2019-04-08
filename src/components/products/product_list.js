import React, {Component} from "react";
import ProductItem from "./product_item";
import axios from "axios";

class ProductList extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: []
        };
        this.goToDetails = this.goToDetails.bind(this);
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
        axios.get("/api/getproducts.php").then((response)=>{
        
            this.setState({
                products: response.data.products
            });
        });
    }

    goToDetails(id){
       this.props.history.push(`/products/${id}`);
    }

    render(){
        const productList = this.state.products.map((product)=>{
            return <ProductItem key={product.id} {...product} goToDetails={this.goToDetails}/>
        });

        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
        );
    }
}

export default ProductList;