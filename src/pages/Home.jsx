import React from "react";
import Buy from "../images/buy.webp";
import Sell from "../images/sell.webp";
import Rent from "../images/rent.webp";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h3>Agents. Tours. Loans. Homes</h3>
        <div>
          <form>
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city or ZIP code"
            />
          </form>
        </div>
      </div>
      <div className="services">
        <div className="service shadow rounded-3">
          <div className="service-img-container">
            <img src={Buy} alt="buy-img" />
          </div>
          <div className="service-title mt-5">
            <h3>Buy a home</h3>
          </div>
          <div className="service-content mt-3 text-center">
            <p>
              Find your place with an immersive photo experience and the most
              listings, including things you won’t find anywhere else.
            </p>
            <button className="mt-4"> Browse homes</button>
          </div>
        </div>
        <div className="service shadow rounded-3">
          <div className="service-img-container">
            <img src={Sell} alt="sell-img" />
          </div>
          <div className="service-title mt-5">
            <h3>Sell a home</h3>
          </div>
          <div className="service-content mt-3 text-center">
            <p>
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </p>
            <button className="mt-4"> See your options</button>
          </div>
        </div>
        <div className="service shadow rounded-3">
          <div className="service-img-container">
            <img src={Rent} alt="rent-img" />
          </div>
          <div className="service-title mt-5">
            <h3>Rent a home</h3>
          </div>
          <div className="service-content mt-3 text-center">
            <p>
              We’re creating a seamless online experience – from shopping on the
              largest rental network, to applying, to paying rent.
            </p>
            <button className="mt-4"> Find rentals</button>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="category">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Real Estate
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                 Browse all home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Chicago real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Atlanta real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Canada real estate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="category">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Rentals
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                 Browse all home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Chicago real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Atlanta real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Canada real estate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="category">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mortage Rate
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                 Browse all home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Chicago real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Atlanta real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Canada real estate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="category">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Browse Home
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                 Browse all home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                 Chicago real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Atlanta real estate
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Canada real estate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
