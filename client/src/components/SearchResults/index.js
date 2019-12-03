import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <img alt={result.id} src={result.url} className="img" />
          <div className="productText">
            <p>Product Name: {result.product_name}</p>
            <hr />
            <p>Product Description: {result.description}</p>
            <hr />
            <p>Price: ${result.price}</p>
            <button type = "submit" id = {result.id} price = {result.price} onClick = {props.addProductToCart} className="addButton">Add to Shopping Cart</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
