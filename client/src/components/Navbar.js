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
                <img src={Logo} width="150px" height="150px" alt="app logo" />
              </div>

            <div className="col-3">
              <h1>Vanity Fur</h1>
              <h2>An Online Pet Shop</h2>
            </div>

            <div className="col-6 header-nav-items">
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
                    <Link to="/shoppingcart" className="nav-link">Shopping Cart</Link>
                  </div>

                  <div className="header-nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Landing)
