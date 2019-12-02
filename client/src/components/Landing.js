import React, {Component} from 'react';
import {receive_products} from './UserFunctions';
import SearchResults from "./SearchResults";
import jwt_decode from 'jwt-decode'

class Landing extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      user_id: 0
    };
  }

  addProductToCart(product_id){
    // Check if the user is logged Else alert them to log in
    if(this.state.user_id){
      // Check if the current user has an order open
      if(checkOpenOrder(this.state.user_id)){
        addProductToOrderLine(this.state.user_id, product_id);
        // If he does not have an open order then we create a new order
      } else {
        createOrder();
        // Check if the product is already in the cart of user else add it to the cart
        if(checkProductInCart(product_id)){
          console.log("The product is already in the cart !");
        } else {
          addProductToOrderLine(this.state.user_id, product_id);
        }
      }
    } else {
      console.log("Please login if you wish to add products to cart.");
    } 
  }

  updateProducts(param) {

    if(localStorage.userToken){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      this.setState({user_id:decoded.id});
    }

    this.setState({products:param});

    console.log(this.state.products[0].product_name);
    console.log(this.state.products[0].description);
    console.log(this.state.products[0].url);
    console.log(this.state.products[0].product_category_id);

  }

  componentDidMount() {
    receive_products().then(res => {
      this.updateProducts(res);
    });
  }; 

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME{this.state.products.length}</h1>
          </div>
          <SearchResults results = {this.state.products}>

          </SearchResults>
        </div>
      </div>
    )
  }
}

export default Landing