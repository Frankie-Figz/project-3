import React, {Component} from 'react';
import {receive_products} from './UserFunctions';
import SearchResults from "./SearchResults";
import Carousel from "./Carousel";


class Landing extends Component {
  constructor(){
    super();
    this.state = {
      products: []
    };
  }

  updateProducts(param) {
    this.setState({products:param});
    console.log(this.state.products[0].product_name);
    console.log(this.state.products[0].description);
    console.log(this.state.products[0].url);
    console.log(this.state.products[0].product_category_id);
  }

  componentDidMount() {
    receive_products().then( res => {
      this.updateProducts(res);
    });
  }; 

  render() {
    return (
      
      <div className="container">
         <Carousel />
        {/* <div className="jumbotron mt-5"> */}
          <div className="col-sm-8 mx-auto">
         
            {/* <h1 className="text-center">WELCOME---{this.state.products.length}</h1> */}
          </div>
          
          <SearchResults results = {this.state.products}>

          </SearchResults>
        {/* </div> */}
      </div>
    )
  }
}

export default Landing


