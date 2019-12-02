import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <img alt="Dog" src={result.url} className="img-fluid" />
          <div className="productText">
            <p>Product Name: {result.product_name}</p>
            <p>Product Description: {result.description}</p>
            <p>Price: ${result.price}</p>
            <button className="addButton">Add to Shopping Cart</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
