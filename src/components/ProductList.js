import React, { Fragment } from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";

const ProductList = props => {
  const { products } = props.context;
  
  return (
    <Fragment>
      <div className="hero is-gradient">
        <div className="hero-body container effect-holder ">
            <h4 className="title dropdown-style ">Nuestros Productos</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No se encontraron productos!
              </span>
            </div>
          )}
        </div>

        <nav className="pagination pb-5" role="navigation" aria-label="pagination">
          <a className="pagination-previous is-disabled" href="/" title="This is the first page">Previous</a>
          <a className="pagination-next" href="/" >Next page</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link is-current" href="/" aria-label="Page 1" aria-current="page">1</a>
            </li>
            <li>
              <a className="pagination-link" href="/" aria-label="Goto page 2">2</a>
            </li>
            <li>
              <a className="pagination-link" href="/" aria-label="Goto page 3">3</a>
            </li>
          </ul>
        </nav>

      </div>
    </Fragment>
  );
};

export default withContext(ProductList);
