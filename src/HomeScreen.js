import React, { useState } from "react";
import data from "./data";
import { Row, Col, Container } from "react-bootstrap";
import ProductScreen from "./ProductScreen";

function HomeScreen() {
  const [searchbar, setSearchBar] = useState("");
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#1976D2" }}
        >
          <div className="container">
            <a className="navbar-brand text-white" href="#">
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i class="fas fa-align-right"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <input
                type="search"
                placeholder="search..."
                className="search__bar"
                onChange={(e) => setSearchBar(e.target.value)}
              />
              <i className="fas fa-search search_icon"></i>
            </div>
          </div>
        </nav>
      </div>
      <Container>
        <Row>
          {data.products
            .filter((val) => {
              if (searchbar === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchbar.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product) => (
              <Col key={product._id} md={4}>
                <ProductScreen product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default HomeScreen;
