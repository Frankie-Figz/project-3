import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from "./images/logo.png";
import "./NavBar.css";

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {

    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="logo-img col-3">
              <img src={Logo} width="200px" height="200px" alt="app logo" />
            </div>

            <div className="col-9 header-nav-items">
              <div className="header-nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </div>

              {!localStorage.usertoken &&
                <div>
                  <div className="header-nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </div>

                  <div className="header-nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                  </div>
                </div>
              }

              {/* <div className="header-nav-item">
                <a className="nav-link" rel="noopener noreferrer">Shopping Cart</a>
              </div> */}

              {localStorage.usertoken &&
                <div>
                  <div className="header-nav-item">
                    <Link to="/profile" className="nav-link">User Profile</Link>
                  </div>

                  <div className="header-nav-item">
                    <Link to="/cart" className="nav-link">Shopping Cart</Link>
                  </div>

                  <div className="header-nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                  </div>
                </div>
              }

              <div className="header-nav-item dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Shop By Pet
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="./components/ProductList.js">Dog</a>
                  <a className="dropdown-item" href="./components/ProductList.js">Cat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Landing)
