import React, {Component} from 'react';
import {receive_products, check_user_order} from './UserFunctions';
import SearchResults from "./SearchResults";
import jwt_decode from 'jwt-decode'
import Carousel from "./Carousel";

class Landing extends Component {
  constructor(){
    super();
    this.state = {
      products: [],
      user_id: 0
    };
  }

  addProductToCart = event => {
    const product_id = event.target.attributes.getNamedItem("id").value;
    const price = event.target.attributes.getNamedItem("price").value;
    event.preventDefault();
    // Check if the user is logged Else alert them to log in
    if(this.state.user_id){
      // Check if the current user has an order open
      console.log("I user " + this.state.user_id + " am logged in");
      console.log("The current product id is : " + product_id);

      const infoOrder = {
        user_id : this.state.user_id,
        product_id : product_id,
        ispaid : false,
        price: price
      }
      // GOOD FROM HERE
      // console.log('infoOrder', infoOrder);

      check_user_order(infoOrder).then(res => {
        console.log(res);
        if(res){
          // console.log('res',res);
          console.log("I am not empty");
          // return res;
        }
        else
          console.log("I am empty inside");
      })

    } else {
      console.log("I am not LOGGED IN.");
      console.log("Please login if you wish to add products to cart.");
    } 
  }

  updateProducts(param) {

    if(localStorage.userToken !== null){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      this.setState({user_id:decoded.id});
    }

    this.setState({products:param});

    console.log(this.state.products[0].product_name);
    console.log(this.state.products[0].description);
    console.log(this.state.products[0].url);
    console.log(this.state.products[0].product_category_id);
    console.log(this.state.user_id);

  }

  componentDidMount() {
    receive_products().then(res => {
      this.updateProducts(res);
    });
  }; 

  render() {
    return (
      
      <div className="container">
        <Carousel />
          <div className="col-sm-8 mx-auto"></div>
          <SearchResults results = {this.state.products} addProductToCart = {this.addProductToCart}>
          </SearchResults>
      </div>
    )
  }
}

export default Landing