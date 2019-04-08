import React, {Component} from "react";

class ProductCarousel extends Component {
    componentDidMount(){
        const config = {
            numVisible: 1,
            indicators: true
        };

        M.Carousel.init(this.carousel, config);
    }

    render(){
        const items = this.props.images.map((image)=>{
            return (
                <a key={image} className="carousel-item" href="#">
                    <img src={`/dist/${image}`} alt="Product Image"/>
                </a>
            );  
        });

        return (
            <div ref={(element)=>this.carousel=element} className="col s12 m8 carousel carousel-slider">
               {items}
            </div>
        );
    }
}

export default ProductCarousel;


