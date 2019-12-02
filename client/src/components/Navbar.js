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
            <div className="logo-img col-8">
              <img src={Logo} width="200px" height="200px" alt="app logo" />
            </div>

            <div className="col-4 header-nav-items">
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

              <div className="header-nav-item">
                <a className="nav-link" rel="noopener noreferrer">Shopping Cart</a>
              </div>

              {localStorage.usertoken && 
                <div>
                  <div className="header-nav-item">
                    <Link to="/profile" className="nav-link">User</Link>
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
