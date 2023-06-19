import React from "react";
import zillowLogo from "../images/zillow-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/buy">
                Buy
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/rent">
                Rent
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/sell">
                Sell
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/loans">
                Home Loans
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/agent">
                Agent Finder
              </Link>
            </li>
          </ul>
        </div>
        <Link class="navbar-brand" to="/">
          <img src={zillowLogo} width="140px" height="100%" />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-2 mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/rentals">
                Manage Rentals
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/advertise">
                Advertise
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" aria-current="page" to="/help">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
