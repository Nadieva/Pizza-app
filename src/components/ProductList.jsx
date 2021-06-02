import React, {Component} from 'react';
import ProductService from '../api/ProductService';
import { IMG_FOLDER_URL } from '../Constants';

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productType: this.props.match.params.productType,
            message: null,
            showPriceEuro: true,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.showProducts = this.showProducts.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }


    componentDidMount() {
        this.showProducts();
    }

    async showProducts() {
        //filter
        ProductService.retrieveProducts(this.state.productType)
            .then(
                response => {
                    this.setState({
                        products: response.data,
                    });
                }
            ).catch((error) => console.log(error));
    }

    handleCurrencyChange() {
        this.setState({
            showPriceEuro: !this.state.showPriceEuro
        });

    }


    render() {

        return (
            <div className="productPage">

                <div className="contentTitle"><h1> Please order your {this.props.match.params.productType}</h1></div>
                <div className="currencyChangeButton"><button onClick={this.handleCurrencyChange} >{this.state.showPriceEuro ? "show dollar" : "Show euro"}</button></div>
                {this.state.message && <div className="orderConfirmation">{this.state.message}</div>}

                <div className="cardList">
                    {
                        this.state.products.map(product =>

                            <div key={this.props.match.params.productType + product.id} className="card">
                                <div className="productImage"><img src={`${IMG_FOLDER_URL}` + this.props.match.params.productType + `/${product.image}`} alt={`Picture ${product.image}`} ></img></div>
                                <div className="cardInfo">
                                    <div className="productName"><h4>{product.name}</h4></div>
                                    <div className="productIngredients"><p>{product.ingredients}</p></div>
                                    <div className="productDiets"><p>{product.diet}</p></div>
                                    <div className="productAllergies"><p>{product.allergies}</p></div>
                                    <div className="productPrice">
                                        {this.state.showPriceEuro && <p>€{product.price_eur[0]} {product.size ? `(${product.size[0]})` : null}</p>}
                                        {this.props.match.params.productType != 'desserts' && this.state.showPriceEuro != 'desserts' && this.state.showPriceEuro && <p>€{product.price_eur[1]} {product.size ? `(${product.size[1]})` : null}</p>}
                                        {!this.state.showPriceEuro && <p>${product.price_usd[0]} {product.size ? `(${product.size[0]})` : null}</p>}
                                        {this.props.match.params.productType != 'desserts' && !this.state.showPriceEuro && <p>${product.price_usd[1]} {product.size ? `(${product.size[1]})` : null}</p>}
                                    </div>
                                    <div className="quantityInfo">
                                        <label>Quantity</label><input className="productQuantity" type="number" min="0"></input><button>Add</button>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProductList;
