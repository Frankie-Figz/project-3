import React, {Component} from "react";
import {check_orderlines, update_order} from "./UserFunctions";
import jwt_decode from 'jwt-decode'
// import "./style.css";

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            orderlines: [],
            user_id: jwt_decode(localStorage.usertoken).id,
            first_name: jwt_decode(localStorage.usertoken).first_name,
            last_name: jwt_decode(localStorage.usertoken).last_name,
            order_id: 0
        };
    }

    completeOrder = event => {
        event.preventDefault();
        const infoOrder = {
            order_id: this.state.order_id
        }

        update_order(infoOrder).then(res => {
            console.log(res);
            this.setState({orderlines: []});
            })
    }

    updateOrderlines = (param) => {
        console.log("this is the param : ");
        console.log(param);
        this.setState({orderlines: param})
        this.setState({order_id : param[0].order_id});
    }    

    componentDidMount() {
        check_orderlines(this.state.user_id).then(res => {
            if(res !== "No Order")
                this.updateOrderlines(res);
        })
    }

    render () {
        return (        
            <div className="container">
                <p> 
                    <font size="+6"> Hello {this.state.first_name} </font>
                </p>
                <div className="container-fluid"> 
                    <table className="container-fluid">
                        <tr>
                            <th align="justify"> Index </th>
                            <th align="justify"> Img </th>
                            <th align="justify"> Product Name </th>
                            <th align="justify"> Brand </th>
                            <th align="justify"> Price </th>
                            <th align="justify"> Quantity </th>
                            <th align="justify"> Line Total </th>
                        </tr>
                        {this.state.orderlines.length !== 0 ? this.state.orderlines.map((result,index) => (
                            <tr key={result.id}>
                                    <td align="justify">{index}</td>
                                    <td align="justify"> <img widhth = "100px" height = "100px" src = {result.product.url} /> </td>
                                    <td align="justify"> {result.product.product_name} </td>
                                    <td align="justify"> {result.product.brand.brand_name} </td>
                                    <td align="justify"> {result.price} </td>
                                    <td align="justify"> {result.qty} </td>
                                    <td align="justify"> {result.qty * parseFloat(result.price)} </td>
                            </tr>
                        )) : (<div></div>)}
                    </table>
                    <div align = "right"> 
                        <button type = "submit" onClick = {this.completeOrder}> Complete Purchase </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;