import React, {Component} from "react";
import {check_orderlines} from "./UserFunctions";
// import jwt_decode from "./jwt-decode";
// import "./style.css";

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            orderlines: []
            // user_id: jwt_decode(localStorage.usertoken)
        };
    }

    updateOrderlines = (param) => {
        this.setState({
            orderlines: param
        })
        console.log(this.state.orderlines);
    }    

    componentDidMount() {
        check_orderlines(this.state.user_id).then( res => {
            console.log(res);
            this.updateOrderlines(res);
        })
    }

    render () {
        return (
            
            <div className="container">
                <ul className="list-group search-results">
                    {this.state.orderlines.map(result => (
                        <li key={result.id} className="list-group-item">
                            <div className="productText">
                                <p>Product Name: {result.product_id}</p>
                                <p>Price: ${result.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Cart;